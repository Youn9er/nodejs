/**
 * @Author: Younger
 * @Date: 2019-10-25
 * @Time: 18:09
 * @Description:  目录
 */
const fs = require("fs");
const path = require("path");
// 递归算法 n!
function factorial (n) {
    if(n == 1) {
        return 1
    } else {
        return n * factorial(n - 1 );
    }
}

console.log(factorial(10));  // 3628800

// 深度优先+先序遍历
function travel (dir, callback) {
    fs.readdirSync(dir).forEach((file) => {
        let pathname = path.join(dir, file);

        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback)
        } else {
            callback(pathname);
        }
    })
}
 travel("./../../7DaysToLearnNodeJs",(pathname) => {
     console.log("pathname==",pathname);
 });
