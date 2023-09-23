//Service 
function getCurrentTime() {
    return new Date()
}
function add(x,y) {
    return x+y
}
//Exports
module.exports.getCurrentTime = getCurrentTime
module.exports.add = add
module.exports = mymodule