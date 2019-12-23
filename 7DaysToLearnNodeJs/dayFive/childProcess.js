/**
 * @Author: Younger
 * @Date: 2019-10-29
 * @Time: 16:39
 * @Description: 子进程
 */

const child_process = require("child_process");


let child = child_process.spawn("node", ["xxx.js"]);

child.stdout.on("data",(data) => {
    console.log("stdout: " + data);
});

child.stderr.on("data",(data) => {
    console.log("stderr: " + data);
});

child.on("close",(code) => {
    console.log("child process exited with code" + code);
});

