var http = require("http");
http.createServer(function(req, res) {
  setTimeout(function() {
    res.writeHead(200);
    res.end('Hello from server');
  }, 3000);
}).listen(4500);
