const {
  createHash
} = require('crypto')

const hash = createHash('md5');

hash.update('test');
console.log(hash.digest('hex'));