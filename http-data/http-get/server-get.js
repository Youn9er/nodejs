const http = require('http');

var server = http.createServer(function(request, response) {

    console.log(request.url);
    response.write('aaa');
    response.end();
});
server.listen(8889);