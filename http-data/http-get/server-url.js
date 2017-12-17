const http=require('http');
const urlLib=require('url');

//url.parse(url,true/false):将一个URL字符串转换成对象并返回。
http.createServer(function (req, res){
  var obj=urlLib.parse(req.url, true);
  
  /*
    false，//foo/bar 形式的字符串将被解释成 { pathname: ‘//foo/bar' }
    true，//foo/bar 形式的字符串将被解释成  { host: ‘foo', pathname: ‘/bar' }
  */

  var url=obj.pathname;
  var GET=obj.query;

  console.log(url, GET);

  //req获取前台请求数据
  res.write('aaa');
  res.end();
}).listen(8889);
