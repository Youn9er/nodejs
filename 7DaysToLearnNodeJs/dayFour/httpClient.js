/**
 * @Author: Younger
 * @Date: 2019-10-28
 * @Time: 14:55
 * @Description: http client
 */
const http = require("http");
// 客户端http
let option = {
    hostname: "www.example.con",
    port: 8998,
    path: "/upload",
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
};

let req = http.request(option, (res) => {});

req.write("Hello World");
req.end();

// get请求

http.get("http://www.tuniu.com",(res) => {
    let body = [];
    console.log("res==",res.statusCode);
    console.log(res.headers);


    res.on("data", (chunk) => {
        body.push(chunk);
    });

    res.on("end", () => {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
});

