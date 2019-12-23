/**
 * @Author: Younger
 * @Date: 2019-10-28
 * @Time: 13:31
 * @Description: http model
 */
const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200,{"Context-Type": "text-plan"});
    res.end("Hello World\n");
}).listen(8999);

