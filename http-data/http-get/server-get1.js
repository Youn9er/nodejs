const http=require('http');

http.createServer(function (request, response){
  var GET={};

  if(request.url.indexOf('?')!=-1){
    var arr=request.url.split('?');
    //arr[0]=>地址  '/aaa'
    var url=arr[0];
    //arr[1]=>数据  'user=Young&pass=123'

    var arr2=arr[1].split('&');
    //arr2=>['user=Young', 'pass=123']

    for(var i=0;i<arr2.length;i++){
      var arr3=arr2[i].split('=');
      //arr3[0]=>名字   'user'
      //arr3[1]=>数据   'Young'
      GET[arr3[0]]=arr3[1];
    }
  }else{
    var url=request.url;
  }


  console.log(url, GET);

  //req获取前台请求数据
  response.write('aaa');
  response.end();
}).listen(8889);
