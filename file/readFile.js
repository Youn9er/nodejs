const fs = require('fs');   //加载file system模块

//readFile(文件名，回调函数)
fs.readFile('em.txt', function(err, data){
    if(err){
        console.log("读取文件失败");
    } else {
        console.log(data);
        /*<Buffer 64 73 66 66 64 73 66 0d 0a 67 74 68 67 6a 68 67 0d 0a 65 72 65 0d 0a 38 35 33 34 35 0d 0a 66 34 35 34 66 0d 0a 66 67 37 33 32 31 0d 0a>*/
        console.log(data.toString());
        /*dsffdsf
        gthgjhg
        ere
        85345
        f454f
        fg7321*/
    }
})