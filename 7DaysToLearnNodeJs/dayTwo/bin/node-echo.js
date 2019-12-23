/**
 * @Author: Younger
 * @Date: 2019-10-25
 * @Time: 15:02
 * @Description:
 */
const argv = require("argv");
const echo = require("./../lib/echo");

console.log(echo(argv.join(' ')));
