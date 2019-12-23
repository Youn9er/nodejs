/**
 * @Author: Younger
 * @Date: 2019-10-29
 * @Time: 17:30
 * @Description: 进程间通信 -> 子进程
 */

process.on("SIGTERM", () => {
    // cleanUp();
    process.exit(0);
});

process.on("message", (msg) => {
    msg.hello = msg.hello.toUpperCase();
    process.send(msg);
});
