var http = require("http");
var url = require('url');

var version = '2.0.0'

http.createServer(function (request, response) {

   console.log(request.toString())

   var page = url.parse(request.url).pathname;
   console.log(page);

   response.writeHeader(200, {"Content-Type": "text/html"});
   var html = ''

   html = 'result from backend'

 response.write(html)
 response.end()
}).listen(9001  );

// Console will print the message
console.log('Server running ');
