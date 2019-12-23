/**
 * @Author: Younger
 * @Date: 2019-06-06
 * @Time: 16:53
 * @Description: node fs module
 */
const fs = require("fs");

// 同步读取文件：
// 读取文本文件
fs.readFile("document/fs.txt", "utf-8", (err,data) => {
    if(err){
        console.log(err)
    } else {
        console.log(data) // 测试fs模块
    }
});

// 读取二进制文件
fs.readFile("document/Vue生命周期.png", (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + " bytes");
        let text = data.toString("utf-8"); // Buffer转换为string
        console.log("text===",text);
        let buf = Buffer.from(text, "utf-8"); // string转换为Buffer
        console.log("buf===", buf);
    }
})

// 同步读取文件：
// 同步读取文件无错误回调，需要try catch捕捉
try{
    let fsSyncData = fs.readFileSync("document/fs.txt", "utf-8");
    console.log("fsSyncData==",fsSyncData);
} catch (e) {
    console.log("e====",e);
}

let fileData = fs.readFileSync("document/input.txt");
console.log(fileData.toString());
console.log("程序执行结束");
