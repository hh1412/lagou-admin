const fs = require('fs')
const zlib = require('zlib')

const gzip = zlib.createGzip()

const readStream = fs.createReadStream('./logs.txt')
const writeStream = fs.createWriteStream('./logs.gzip')
const writeStreamlogs2 = fs.createWriteStream('./logs2.txt')

readStream
    .pipe(gzip)
    .pipe(writeStream)

readStream
    .pipe(writeStreamlogs2)