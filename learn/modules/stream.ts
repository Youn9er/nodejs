/**
 * @Author: Younger
 * @Date: 2019-06-06
 * @Time: 18:29
 * @Description: node stream
 */

const fs = require("fs");
let rs = fs.createReadStream("document/fs.txt", "utf-8");

rs.on("data", (chunk) => {
    console.log("DATA:")
    console.log(chunk);
});

rs.on("end", () => {
    console.log("END");
});

rs.on("error",(err) => {
    console.log("ERROR: " + err);
});

let ws1 = fs.createWriteStream('document/fs.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();

// let ws2 = fs.createWriteStream("document/fs.txt","utf-8");
// ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
// ws2.write(new Buffer('END.', 'utf-8'));
// ws2.end();
