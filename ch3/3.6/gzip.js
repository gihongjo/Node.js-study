const zlib = require('zlib');
const fs = require('fs');


const readStream = fs.createReadStream('./readme4.txt');
///gzib으로 생성
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./readme4.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);
