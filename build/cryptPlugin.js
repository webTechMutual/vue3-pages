const process = require('process')
const CryptoJS = require('crypto-js')

const args = process.argv.slice(2)

console.log('args:', args)

const cryptKey = CryptoJS.MD5('7777asd').toString()
console.log('cryptKey:', cryptKey)
const str = JSON.stringify({
  id: 1,
  name: 'test7kjk',
  age: 77,
  remark: 'fasdffffffffffffffffffffffff adfasd  fasdfaaaaaaasddddddddddddddddddddddddddddddddddddddddddddddd'
})

var ciphertext = CryptoJS.AES.encrypt(str, cryptKey).toString()
console.log('ciphertext:', ciphertext)

