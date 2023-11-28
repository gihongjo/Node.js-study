//파일


const fs = require('fs');

///createReadStream은 64KB를 한번에 읽음. 
///highWaterMark는 몇바이트씩 데이터를 끊어서 보낼지 입력
const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 });
const data = [];

readStream.on('data', (chunk) => {
  data.push(chunk);
  console.log('data :', chunk, chunk.length);
});

readStream.on('end', () => {
  console.log('end :', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
  console.log('error :', err);
});
