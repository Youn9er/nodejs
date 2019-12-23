/**
 * @Author: Younger
 * @Date: 2019-10-25
 * @Time: 15:34
 * @Description: 文件copy
 */
const fs = require("fs");

function copy(src, dst) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv) {
    copy(argv[0], argv[1]);
}

main(process.argv.slice(2));
