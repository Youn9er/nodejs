/**
 * @Author: Younger
 * @Date: 2019-10-29
 * @Time: 17:14
 * @Description: 进程间通信 -> 父进程
 */

const child_process = require("child_process");

// let child = child_process.spawn("node",[ "child.js"] );

// .kill方法向子进程发送SIGTERM信号
// child.kill("SIGTERM");

// 通过IPC双向传递数据：
let child = child_process.spawn("node", [ "child.js" ], {
    stdio: [0, 1, 2, "ipc"]
});

child.on("message", (msg) => {
    console.log("msg==",msg);  // msg== { hello: 'HELLO' }
});

child.send({ hello: "hello" });
