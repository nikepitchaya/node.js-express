// router.get(("/"), (req, res) => {
//     res.status(200)
//     res.type('text/html')
//     res.sendFile(path.join(__dirname, "../templates/index.html"))
// })

// router.get(("/product/:id"), (req, res) => {
//     const param = req.params.id
//     if (param == "1") res.sendFile(path.join(__dirname, "../templates/product.html"))
//     else if (param == "2") res.sendFile(path.join(__dirname, "../templates/product2.html"))
//     else if (param == "3") res.sendFile(path.join(__dirname, "../templates/product3.html"))
//     else res.redirect('/')
// })