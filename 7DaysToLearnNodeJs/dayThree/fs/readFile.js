/**
 * @Author: Younger
 * @Date: 2019-10-25
 * @Time: 16:58
 * @Description: 读取文件
 */
const fs = require("fs");

fs.readFile("./../doc/stream", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data)   // <Buffer e8 bf 99 e6 98 af e4 b8 80 e6 ae b5 e6 b5 8b e8 af 95 e6 96 87 e5 ad 97 0a>
    }
});

// 异步
try {
    let data = fs.readFileSync("./../doc/stream");
    console.log("data==",data);
} catch (err) {
    console.log(err);
}
