/**
 * @Author: Younger
 * @Date: 2019-06-06
 * @Time: 17:42
 * @Description: node fs state
 */
const fs = require("fs");

fs.stat("document/fs.txt",(err, stat) => {
    if(err){
        console.log("err===", err);
    } else {
        // 是否是文件
        console.log("isFile" + stat.isFile());
        // 是否是目录
        console.log("isDirectory: " + stat.isDirectory());
        if(stat.isFile){
            // 大小
            console.log("size: "+ stat.size);
            // 创建时间
            console.log("creat time: " + stat.birthtime);
            // 修改时间
            console.log("modified time:" + stat.mtime);
        }
    }
})
