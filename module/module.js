const showName = (name) => {
    console.log(name)
}

// module.exports.func = showName

// module.exports.showName = (name) => {
//     console.log(name)
// }
const john = {
    'name': 'John',
    'age': 35
}

// module.exports.obj = john

// module.exports.john = {
//     'name': 'John',
//     'age': 35
// }
showName('anh')
module.exports = {showName, john}
showName('anh 2')