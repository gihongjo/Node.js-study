const fs = require('fs');


//파일을 스트림으로 읽어서 스트림으로 쓰는 pipe 
const readStream = fs.createReadStream('readme4.txt');
const writeStream = fs.createWriteStream('writeme3.txt');
readStream.pipe(writeStream);
