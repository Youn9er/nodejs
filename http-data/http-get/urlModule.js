const urlLib=require('url');

//url.parse():将一个URL字符串转换成对象并返回。
var obj=urlLib.parse("http://www.young.com/index?a=12&b=5", true);

console.log(obj.pathname, obj.query);   ///index { a: '12', b: '5' }
