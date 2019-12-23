/**
 * @Author: Younger
 * @Date: 2019-10-28
 * @Time: 14:48
 * @Description: http server
 */
// 服务端http

const http = require("http");
 http.createServer((req, res) => {
     res.writeHead(200,{ "Content-Type": "text/plain"});

     req.on("data", (chunk) => {
         res.write(chunk);
     });

     req.on("end", () => {
         res.end()
     });
 }).listen(8998);
