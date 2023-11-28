const fs = require('fs');



///이하의 작업은 동기방식으로 실행되지만 비동기 방식이다.
///순서대로 실행됨
///전체가 백그라운드로 들어간다. 동시성을 살릴 수 있다,
///콜백헬을 만들 수 있다.
///promnis를 쓰는 것이 좋다.
console.log('시작');
fs.readFile('./readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('1번', data.toString());
  fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
      throw err;
    }
    console.log('2번', data.toString());
    fs.readFile('./readme2.txt', (err, data) => {
      if (err) {
        throw err;
      }
      console.log('3번', data.toString());
      console.log('끝');
    });
  });
});
