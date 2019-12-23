/**
 * @Author: Younger
 * @Date: 2019-10-28
 * @Time: 16:17
 * @Description: 实现URL参数字符串与参数对象的相互转换
 */
const querystring = require("querystring");

// parse：
let _parse = querystring.parse("foo=bar&baz=qux&baz=quux&corge");

console.log("_parse==",_parse); // _parse== { foo: 'bar', baz: [ 'qux', 'quux' ], corge: '' }

// stringify：
let _stringify = querystring.stringify({foo: "bar", baz: ["qux", "quux"], corge: ""});
console.log("_stringify==",_stringify);  // _stringify== foo=bar&baz=qux&baz=quux&corge=
