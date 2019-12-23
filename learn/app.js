/**
 * @Author: Younger
 * @Date: 2019-05-15
 * @Time: 15:32
 */
const express = require('express');
const logger = require("morgan")
const app = express();
const square = require("./component/circle/square");
const server = require("./component/http/HttpServer");
const main = require("./router/main/router");


app.listen(3001, () => {
    console.log("示例应用正在监听 3000 端口!");
})
server.server();

// demo.use(logger("dev"));


console.log('边长为 4 的正方形面积为 ' + square.area(4));
console.log('边长为 4 的正方形周长为 ' + square.perimeter(4));
square.time();

app.get("/",(req, res) => {
    res.send("Hello World!");
});



