const http = require('http');   //加载http模块

var server = http.createServer(function (request, response) {   //创建服务器

    //console.log(response);
    console.log(request.url);
    /*
    Server running at http://127.0.0.1:8888/
    /favicon.ico
    */
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
});

//监听端口
server.listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');