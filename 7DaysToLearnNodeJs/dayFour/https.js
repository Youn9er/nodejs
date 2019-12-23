/**
 * @Author: Younger
 * @Date: 2019-10-28
 * @Time: 15:40
 * @Description: https
 */
// https需要额外处理ssl证书 如下
const https = require("https");
const fs = require("fs");

let option = {
    key: fs.readFileSync(""),   // 私钥
    cert: fs.readFileSync("")   // 公钥

};

let server = https.createServer(option, (req, res) => {
    // do someTing
});

// SNI技术 根据客户端请求使用的域名动态使用不同的证书,因此，一个https服务器可以使用多个域名提供服务

server.addContext("foo.com",{
    key: fs.readFileSync("./ssl/foo.com.key"),
    cert: fs.readFileSync("./ssl/foo.com.cer")
});
server.addContext("bar.com", {
    key: fs.readFileSync("./ssl/bar.com.key"),
    cert: fs.readFileSync("./ssl/bar.com.cer")
});
