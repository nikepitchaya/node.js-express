// $ CREATE WEBSERVER WITHOUT EXPRESS.JS
// const http = require('http')
// const fs = require('fs')
// const url = require('url')
// const index = fs.readFileSync('./templates/index.html', 'utf-8')
// const product = fs.readFileSync('./templates/product.html', 'utf-8')
// const product2 = fs.readFileSync('./templates/product2.html', 'utf-8')
// const product3 = fs.readFileSync('./templates/product3.html', 'utf-8')
// const server = http.createServer((req, res) => {
//     const { pathname, query } = url.parse(req.url, true)
//     console.log(query)
//     if (pathname === '/') {
//         res.end(index)
//     }
//     else if (pathname === '/product') {
//         if (query.id === "1") res.end(product)
//         else if (query.id === "2") res.end(product2)
//         else if (query.id === "3") res.end(product3)
//         else res.end('<h1>No Product</h1>')
//     }
//     else {
//         res.writeHead(404)
//         res.end('<h1>Not Found</h1>')
//     }
// })
// server.listen(3000, 'localhost', (() => {
//     console.log('Start Server at Port 3000')
// }))