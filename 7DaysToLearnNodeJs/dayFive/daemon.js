/**
 * @Author: Younger
 * @Date: 2019-10-29
 * @Time: 17:50
 * @Description: 保证进程不间断工作
 */

const child_process = require("child_process");
function spawn(mainModule) {
    let worker = child_process.spawn("node", [ mainModule ]);

    worker.on("exit", (code) => {
        if (code !== 0) {
            spawn(mainModule);
        }
    });
}

spawn("worker.js");
