const http = require('http');

var server = http.createServer(function (request, response) {

    switch(request.url) {
        case "1.html":
            response.write("11111");
            break;
        case "2.html":
            response.write("22222");
            break;
        default:
            response.write("404");
            break;
    }
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    //response.end('Hello World\n');
});

//监听端口
server.listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');