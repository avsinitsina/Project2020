const iconv = require('iconv-lite');
const http = require('http');
const fs = require('fs');

http.get('http://sensors.mwlabs.ru/view/ABE679970903', (res) => {
  res.pipe(iconv.decodeStream('win1251')).collect((err, pre) => {
    if (err) throw err;
    fs.writeFileSync('./data/room_temperature/210bat.txt', pre);
  });
});

http.get('http://sensors.mwlabs.ru/view/43E079971203', (res) => {
  res.pipe(iconv.decodeStream('win1251')).collect((err, pre) => {
    if (err) throw err;
    fs.writeFileSync('./data/room_temperature/210wall.txt', pre);
  });
});

http.get('http://sensors.mwlabs.ru/view/0A7779970903', (res) => {
  res.pipe(iconv.decodeStream('win1251')).collect((err, pre) => {
    if (err) throw err;
    fs.writeFileSync('./data/room_temperature/316bat.txt', pre);
  });
});

http.get('http://sensors.mwlabs.ru/view/94CC79971203', (res) => {
  res.pipe(iconv.decodeStream('win1251')).collect((err, pre) => {
    if (err) throw err;
    fs.writeFileSync('./data/room_temperature/316wall.txt', pre);
  });
});

http.get('http://sensors.mwlabs.ru/view/7D0679971403', (res) => {
  res.pipe(iconv.decodeStream('win1251')).collect((err, pre) => {
    if (err) throw err;
    fs.writeFileSync("./data/room_temperature/412bat.txt", pre);
  });
});

http.get('http://sensors.mwlabs.ru/view/A2BF79971203', (res) => {
  res.pipe(iconv.decodeStream('win1251')).collect((err, pre) => {
    if (err) throw err;
    fs.writeFileSync('./data/room_temperature/412wall.txt', pre);
  });
});

http.get('http://sensors.mwlabs.ru/view/53C779971203', (res) => {
  res.pipe(iconv.decodeStream('win1251')).collect((err, pre) => {
    if (err) throw err;
    fs.writeFileSync('./data/room_temperature/420bat.txt', pre);
  });
});

http.get('http://sensors.mwlabs.ru/view/6AE379971203', (res) => {
  res.pipe(iconv.decodeStream('win1251')).collect((err, pre) => {
    if (err) throw err;
    fs.writeFileSync('./data/room_temperature/420wall.txt', pre);
  });
});

http.get('http://sensors.mwlabs.ru/view/BDF579970903', (res) => {
  res.pipe(iconv.decodeStream('win1251')).collect((err, pre) => {
    if (err) throw err;
    fs.writeFileSync('./data/room_temperature/sfbat.txt', pre);
  });
});

http.get('http://sensors.mwlabs.ru/view/F51A79970903"', (res) => {
  res.pipe(iconv.decodeStream('win1251')).collect((err, pre) => {
    if (err) throw err;
    fs.writeFileSync('./data/room_temperature/sfwall.txt', pre);
  });
});
