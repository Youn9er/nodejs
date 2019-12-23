/**
 * @Author: Younger
 * @Date: 2019-10-29
 * @Time: 13:28
 * @Description: 进程 process
 */

const http = require("http");

// process是一个全局对象，任何地方都可以使用
const process = require("process");

// 获取命令行参数： 第一个命令行参数通常从argv[2]开始
process.argv;

// 退出程序：
process.exit(1);

try{
    // do something
} catch (e) {
    // do something
    process.exit(1);
}

// 控制输入输出：

// 输入流：
process.stdin;

// 输出流：
process.stdout;

// 错误流：
process.stderr;

// 降权   先降GID再降UID
http.createServer(callback).listen(80,() => {
    let env = process.env,
        uid = parseInt(env["SUDO_UID"] || process.getuid(),10),
        gid = parseInt(env["SUDO_GID"] || process.getegid(),10);

    process.setgid(gid);
    process.setuid(uid);
});
