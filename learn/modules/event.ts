/**
 * @Author: Younger
 * @Date: 2019-07-01
 * @Time: 15:27
 * @Description: node event
 */

// 引入模块
const events = require("events");

// 创建事件处理程序
let eventEmitter = new events.EventEmitter();

let connectHandler = function connected() {
    console.log("连接成功");

    // 触发 data_received 事件
    eventEmitter.emit("data_received");
}

// 绑定 connection 事件处理程序
eventEmitter.on("connection",connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on("connection", () => {
    console.log("数据接收成功");
})

// 触发 connection 事件
eventEmitter.emit("connection");

console.log("程序执行完毕");

// 连接成功
// 数据接收成功
// 程序执行完毕
