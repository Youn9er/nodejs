/**
 * @Author: Younger
 * @Date: 2019-06-06
 * @Time: 17:35
 * @Description: fs write
 */
const fs = require("fs");

// ###############################################################################
// 将数据写入文件
// 回调函数只关心是否写入成功

// 异步写入
let content = "异步写入文件的数据";
fs.writeFile("document/fs.txt", content, (err) => {
    if(err){
        console.log(err)
    } else {
        console.log("it is OK!")
    }
});

// 同步写入
let syncData = "同步写入的数据"
fs.writeFileSync("document/fs.txt", syncData);
