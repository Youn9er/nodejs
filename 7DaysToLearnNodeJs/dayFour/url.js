/**
 * @Author: Younger
 * @Date: 2019-10-28
 * @Time: 15:59
 * @Description: url
 */
const url = require("url");

let urlObject = url.parse("http://user:pass@host.com:8080/p/a/t/h?query=string#hash");

console.log("url==",urlObject);
// url== Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: 'user:pass',
//     host: 'host.com:8080',
//     port: '8080',
//     hostname: 'host.com',
//     hash: '#hash',
//     search: '?query=string',
//     query: 'query=string',
//     pathname: '/p/a/t/h',
//     path: '/p/a/t/h?query=string',
//     href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
// }



// .parase支持两个参数，第一个参数为true时，返回的url对象中，query是一个经过querystring模块转换后的参数对象，第二个参数为true时，可以正确解析不带协议头的url，如：//www.example.com/foo/bar。
let urlObject2 = url.parse("http://user:pass@host.com:8080/p/a/t/h?query=string#hash",true,true);
console.log("urlObject2==",urlObject2);
// urlObject2== Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: 'user:pass',
//     host: 'host.com:8080',
//     port: '8080',
//     hostname: 'host.com',
//     hash: '#hash',
//     search: '?query=string',
//     query: { query: 'string' },
// pathname: '/p/a/t/h',
//     path: '/p/a/t/h?query=string',
//     href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
// }


// url format: 将url对象转换为url字符串形式

let urlFormat = url.format({
    protocol: "http",
    host: "www.example.com",
    pathname: "/p/a/t/h",
    search: "query=string"
});
console.log("urlFormat==",urlFormat);   // urlFormat== http://www.example.com/p/a/t/h?query=string


// url .resolve 用于拼接url
let urlResolve = url.resolve("http://www.example.com/foo/bar", "../baz");
console.log("urlResolve==", urlResolve);    // urlResolve== http://www.example.com/baz

