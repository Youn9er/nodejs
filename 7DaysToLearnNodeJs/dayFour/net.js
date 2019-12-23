/**
 * @Author: Younger
 * @Date: 2019-10-28
 * @Time: 16:31
 * @Description: 创建Socket服务器或者Socket客户端
 */

const net = require("net");

// 创建服务
net.createServer((conn) => {
    conn.on("data", (data) => {
        conn.write([
            "HTTP/1.1 200 OK",
            "Content-Type: text.plain",
            "Content-Length: 11",
            "",
            "Hello World"
        ].join("\n"));
    });
}).listen(8997);

// 发送请求
let option = {
    port: 8997,
    host: "127.0.0.1"
};
let client = net.connect(option, () => {
    client.write([
        'GET / HTTP/1.1',
        'User-Agent: curl/7.26.0',
        'Host: www.baidu.com',
        'Accept: */*',
        '',
        ''
    ].join('\n'));
});
client.on("data", (data) => {
    console.log("data==",data.toString());
    // data== HTTP/1.1 200 OK
    // Content-Type: text.plain
    // Content-Length: 11

    client.end()
})
