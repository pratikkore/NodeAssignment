var http = require('http');
var coust = require('./coust.json');



var server = http.createServer( function (req, res) {
if(req.url=== "/vegetable"){
res.writeHead(200 ,{"content-Type": "text/json"});
res.end(JSON.stringify(coust));

}

});

server.listen(8080, function () {

  console.log("listing at port 8080");
})
