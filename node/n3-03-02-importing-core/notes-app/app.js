const fs = require('fs')
const firstName = require('./utils.js')
const edd = require('./utils.js')
const getNotes = require('./notes.js')
const val = require('validator')

//fs.writeFileSync('notes.txt', 'My name is Andrew.')
//fs.appendFileSync('notes.txt', ' I live in Philadelphia.')

console.log(firstName)
console.log(edd(3,4))
console.log(getNotes())

console.log(val.isEmail('eduardg@gmail'))
console.log(val.isURL('https://good.com'))