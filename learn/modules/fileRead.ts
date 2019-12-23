/**
 * @Author: Younger
 * @Date: 2019-07-01
 * @Time: 15:12
 * @Description: node fs
 */

// 阻塞式代码实例
const fs = require("fs");
let fileData = fs.readFileSync("document/input.txt");

console.log(fileData.toString());
console.log("程序执行结束");

// hello node
//
// write by Younger.
//
//     程序执行结束


// 非阻塞式代码实例
fs.readFile("document/input.txt", (err, data) => {
    if(err){
        return console.error(err);
    }
    console.log(data.toString())
});

console.log("程序执行结束");

// 程序执行结束
// hello node
//
// write by Younger.
