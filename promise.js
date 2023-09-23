//Create Promise 

const connect = true
const url = 'dev.nike/file1.json'
const url2 = 'dev.nike/file2.json'
const url3 = 'dev.nike/file3.json'

function downloading(url) {
    console.log(`Start Download ${url}`)
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (connect) {
                resolve(`Downloading ${url}`)
            }
            else {
                reject('Have some error')
            }
        }, 1000);
    })
}
//Async & Await
async function start() {
    console.log(await downloading(url))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
}
start()

//Common Promise
// downloading(url).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log('Finish Downloading')
// })

//Promise Hell
// downloading(url).then(function (res) {
//     console.log(res)
//     downloading(url2).then(function (res) {
//         console.log(res)
//         downloading(url3).then(function (res) {
//             console.log(res)
//         })
//     })
// })

//Promise Then
// downloading(url).then((res) => {
//     console.log(res)
//     return downloading(url2)
// }).then((res) => {
//     console.log(res)
//     return downloading(url3)
// }).then((res) => {
//     console.log(res)
// })