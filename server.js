const {
  scryptSync,
  createCipheriv,
  createHash
} = require('crypto')

const hash = createHash('md5')
const password = '7a1111'

hash.update(password)

const key1 = scryptSync(password, '', 16)
console.log(key1.toString('hex'))  // '3745e48...08d59ae'
console.log(hash.digest('hex'))