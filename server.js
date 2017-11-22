var http = require("http");
var url = require('url');

var version = '2.0.1'

var port = 8080

http.createServer(function (request, response) {

   console.log(request.toString())

   var page = url.parse(request.url).pathname;
   console.log(page);

   response.writeHeader(200, {"Content-Type": "text/html"});
   var html = ''



   if (page == '/test') {


       var params = url.parse(request.url, true).query;
       console.log(params)


       var backend_url =  'http://'+ params.backend + ':' + params.port +'/'
       console.log("request to "+backend_url)

       http.get({
            hostname: params.backend,
            port: params.port,
            path: '/',
            timeout: 1000  // timeout in 0.1 second
        }, (resp) => {

             // A chunk of data has been recieved.
             resp.on('data', (chunk) => {
               html += chunk;
             });

             // The whole response has been received. Print out the result.
             resp.on('end', () => {
               response.write(html)
               response.end()
             });
       }).on("error", (err) => {
         console.log("Error: " + err.message);
         response.write(err.message)
         response.end()
       });


   } else {

      var currentdate = new Date();
      var datetime = "Last Sync: " + currentdate.getDate() + "/"
                     + (currentdate.getMonth()+1)  + "/"
                     + currentdate.getFullYear() + " @ "
                     + currentdate.getHours() + ":"
                     + currentdate.getMinutes() + ":"
                     + currentdate.getSeconds();
      html = "<font color=blue> Mock app version " + version + "</font><br>"
      html += datetime
      response.write(html)
      response.end()

   }

}).listen(port);

// Console will print the message
console.log('Server running at http://127.0.0.1:'+port+'/');
