const fs = require('fs')
// const book = {
//     title: 'Peace of Mind',
//     author: 'Guru'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-Json.json', bookJSON)
// // console.log(bookJSON)

// // const bookparse = JSON.parse(bookJSON)
// // // console.log(bookparse.author)
const databuffer = fs.readFileSync('1-Json.json')
const dataJSON = databuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data)

data.name = 'Varun'
data.age = '22'

const newdata = JSON.stringify(data)
fs.writeFileSync('1-Json.json', newdata)
console.log(newdata)