
///fs 모듈
const fs = require('fs');

console.log('시작');



  //fs는 비동기 방식이기 때문에 Background에 갔다가 온다.
  //순서가 바뀔수도 있다. 랜덤임.
  //동시에 시작되기 때문에 우리는 알 수 없다.
fs.readFile('./readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('1번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('2번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('3번', data.toString());
});
console.log('끝');
