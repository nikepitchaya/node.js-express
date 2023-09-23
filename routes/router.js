// $For Non-Static File
const express = require('express')
const router = express.Router()

// ใช้งานโมลเดล
const Product = require('../models/product')

// โมดูลอัพโหลดไฟล์
const multer = require('multer')
// สร้าง Option สำหรับการอัพโหลดไฟล์ (Disk Storage)
const storage = multer.diskStorage({
    //จัดเก็บที่อยู่ไฟล์ที่มีการอัปโหลดเข้ามา
    destination: function (req, fill, callback) {
        callback(null, './public/images/products')
    },
    //จัดการชื่อไฟล์
    filename: function (req, file, callback) {
        callback(null, Date.now() + '.jpg')//เปลี่ยนชื่อไฟล์ ป้องกันชื่อซ้ำ
    }
})
// เริ่มใช้งานโมดูลและตั้งค่าให้กับโมดูล
const upload = multer({
    storage: storage
})

// Routing
router.get(("/"), (req, res) => {
    Product.find().exec((err, document) => {
        if (err) {
            return err
        }
        res.render('index', { products: document })
    })
})
router.get(("/product/:id"), (req, res) => {
    Product.findOne({ _id: req.params.id }).exec((err, document) => {
        if (err) {
            return err
        }
        res.render('product', { product: document })
    })
})
router.get(("/form"), (req, res) => {
    res.render('form')
})
router.get(("/manage"), (req, res) => {
    Product.find().exec((err, document) => {
        if (err) {
            return err
        }
        res.render('manage', { products: document })
    })
})
router.get(("/delete/:id"), (req, res) => {
    Product.findByIdAndDelete(req.params.id, { useFindAndModify: false }).exec((err) => {
        if (err) {
            return err
        }
        res.redirect('/manage')
    })
})
router.get(("/edit/:id"), (req, res) => {
    Product.findOne({ _id: req.params.id }).exec((err, document) => {
        if (err) {
            return err
        }
        console.log(document)
        res.render('edit', { product: document })
    })
})
router.post(("/update"), (req, res) => {
    const product_id = req.body.product_id
    const data = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    }
    Product.findByIdAndUpdate(product_id, data, (err, document) => {
        if (err) {
            return err
        }
        res.redirect('/manage')
    })
})
router.post(("/insert"), upload.single("image"), (req, res) => {
    let data = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.file.filename,
        description: req.body.description,
    })
    Product.createProduct(data, function (err) {
        if (err) {
            return err
        }
        res.redirect('/')
    })
})

module.exports = router