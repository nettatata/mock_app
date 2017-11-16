var http = require("http");

http.createServer(function (request, response) {
   console.log(request.toString())
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
  //  response.end('Hello World<br>\n');
   // response.end('<hr>\n');
  
var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();


 response.end(datetime);
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');