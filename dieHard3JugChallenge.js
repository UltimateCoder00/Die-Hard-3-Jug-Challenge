// var httpServer = require("http-server");
// var path = require("path");
//
// var pathToHtmlAndJsFiles = path.join(__dirname, "/");
// var server = httpServer.createServer({root: pathToHtmlAndJsFiles
// });
//
//
// console.log("Server running at localhost:5000")
// console.log("'ctrl-c' to end")
//
// server.listen(5000);


var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/'));

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  console.log("'ctrl-c' to end");
});
