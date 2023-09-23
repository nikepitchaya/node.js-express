//ใช้งาน Mongoose
const mongoose = require('mongoose')
//เชื่อม Mongodb
const dbUrl = 'mongodb://localhost:27017/productDB' //จัดเก็บตน.ฐานข้อมูลที่จะถูกสร้างขึ้นมา ('คำสั่งในการเชื่อมต่อฐานข้อมูล'://'<host name>:<port>/<database name>)
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch(err => console.log(err))
//ออกแบบ Schema (โครงสร้างในการจัดเก็บข้อมูล)
let productSchema = mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String,
})
//สร้างโมเดล (ชื่อคอลเลคชั่น)
let Product = mongoose.model("products",productSchema) //(ชื่อโมเดล,โครงสร้างในการจัดเก็บข้อมูล)
//ส่งออกโมเดล
module.exports = Product

//สร้าง service (ทำงานภายใต้โมลเดล Product โดยรับ params : (โมลเดลที่ต้องการอยากจะทำงาน,document))
module.exports.createProduct=function(model,data){
    model.save(data)
}