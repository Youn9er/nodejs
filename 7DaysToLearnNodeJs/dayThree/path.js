/**
 * @Author: Younger
 * @Date: 2019-10-25
 * @Time: 17:28
 * @Description:  路径
 */
// path.normalize 将传入的路径转换为标准路径，除过解析路径中的.与..外，还能去掉多余的斜杠
const path = require("path");
let cache = {};

function store (key, value) {
    cache[path.normalize(key)] = value;
}

store("foo/bar",1);
store("foo//baz/../bra",2);
console.log("cache==",cache);   // cache== { 'foo/bar': 1, 'foo/bra': 2 }

// path.join 将传入的多个路径拼接为标准路径
console.log(path.join("foo/", "baz/", "../bar"));   // foo/bar

// path.extname
console.log(path.extname("foo/bar.js"));    // .js

