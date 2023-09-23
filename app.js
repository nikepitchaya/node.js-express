// import & implement module 
const express = require('express')
const path = require('path')
const router = require('./routes/router')
const app = express()

app.set('views', path.join(__dirname, 'views')) // ตั้งค่า dynamic file ใช้สำหรับอ้างอินตำแหน่งที่เก็บ template (folder views,template file)
app.set('view engine', 'ejs') //ระบุรูปแบบ engine เป็น ejs
app.use(express.urlencoded({extended:false})) //กรณีที่มีการส่งข้อมูลมาในรูปแบบ POST METHOD จะให้ URL ทำการถอดรหัสเพื่อที่จะได้ข้อมูลที่ส่งมาใช้งานใน router ที่อ้างอิง
app.use(router) // นำ module router ที่ใช้จัดการ routing มาใช้งาน
app.use(express.static(path.join(__dirname,'public'))) //ตั้งค่า static file

app.listen(8080, (() => {
    console.log('Start server at port 8080')
}))