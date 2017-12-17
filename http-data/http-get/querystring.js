const querystring=require('querystring');

////将url上带的参数串转成数组对象
var json=querystring.parse("user=Young&pass=123&age=22");
console.log(json);  //{ user: 'Young', pass: '123', age: '22' }
