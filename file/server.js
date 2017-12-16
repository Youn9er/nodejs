const http = require('http');   //加载http模块  
const fs = require('fs');       //加载file system模块

var server = http.createServer(function(request,response){


    //request.url => "/.index.html"
    //读取=> "./www/index.html"
    // ""./www" + request.url"
    var file_name = "./www" + request.url;  
    fs.readFile(file_name,function(err, data){  //读取文件
        if(err){
            response.write("404");
        } else {
            response.write(data);
        }
        response.end();
    });   
});

server.listen(8888);    //端口监听