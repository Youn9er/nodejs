/**
 * @Author: Younger
 * @Date: 2019-10-25
 * @Time: 16:39
 * @Description:  数据流
 */
// 当内存中无法一次装下需要处理的数据时，或者以便读取一边处理更加高效时，需要用到数据流，NodeJS中通过各种Stream来提供对数据流的操作

const fs = require("fs");
// 文件copy
let rs = fs.createReadStream("./doc/stream");
let ws = fs.createWriteStream("./doc/dstStream");

rs.on('data', function (chunk) {
    console.log("rs==",chunk);  // rs== <Buffer e8 bf 99 e6 98 af e4 b8 80 e6 ae b5 e6 b5 8b e8 af 95 e6 96 87 e5 ad 97 0a>
    if (ws.write(chunk) === false) {

        rs.pause();
    }
});

rs.on('end', function () {
    ws.end();
});

ws.on('drain', function () {
    rs.resume();
});

