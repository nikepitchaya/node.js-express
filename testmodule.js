const currentDate = require('./module/mymodule.js')
const fs = require('fs')

//Blocking
//อ่านไฟล์
// const data_sync = fs.readFileSync('./file/input.txt', 'utf-8') // (ตำแหน่งไฟล์,รูปแบบการถอดรหัส)
// console.log(data_sync)
// เขียนไฟล์
// const outputText = `Hello Node.js\n${data_sync}\nถูกเขียนเมื่อ ${new Date()}`
// fs.writeFileSync('./file/input.txt', outputText) //(ตำแหน่งไฟล์,ข้อมูลที่ต้องการเขียน)

//Non-Blocking
fs.readFile('./file/input.txt', 'utf-8', (err, data) => {
    if (err) return console.log("เกิดข้อผิดพลาด", err)
    const outputFile = `${data}\nณ ประเทศไทย`
    fs.writeFile('./file/output.text', outputFile, err => {
        if (err) return console.log("เกิดข้อผิดพลาด", err)
        console.log('จบสิ้นการทำงาน')
    })
}) //(ตำแหน่งไฟล์,รูปแบบการถอดรหัส,callback)