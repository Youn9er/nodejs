const fs = require('fs');   //加载file system模块

//fs.writeFile(文件名，写入的值，回调函数)
fs.writeFile('writeEg.txt', 'Young', function(err) {
    console.log(err);   //null
})