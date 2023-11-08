const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json-copy.json', bookJSON)

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)

// const readFile = fs.readFileSync('1-json-copy.json')
// const dataJSON = readFile.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const readJSON = fs.readFileSync('1-json-copy.json')
const strJSON = readJSON.toString()
const changeJSON = JSON.parse(strJSON)

changeJSON.name = "Eddy"
changeJSON.planet = "Vegita"
changeJSON.age = 38


const saveJSON = JSON.stringify(changeJSON)
fs.writeFileSync('1-json-copy.json', saveJSON)