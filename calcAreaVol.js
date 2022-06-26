var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  const queryObject = url.parse(req.url, true).query;
  const type = queryObject.object;
  const radius = queryObject.radius;
  const metric = queryObject.metric;
  const pie = 3.14;
  if (type.toLowerCase() === "circle") {
    if (metric.toLowerCase() === "area") {
      let area = pie * (radius * radius);
      res.end("area of circle:" + area);
    }else {
      res.end("This oeration is not possible on circle.");
    }
  }
  else if (type.toLowerCase() === "sphere") {
    if (metric.toLowerCase() === "volume") {
      let volume = (4 / 3) * pie * (radius * radius * radius);
      res.end("volume of sphere:"+ volume);
    } else if (metric.toLowerCase() === "surface") {
      let surface = 4 * pie * (radius * radius);
      res.end("surface of sphere:"+ surface);
    } else {
      res.end("This oeration is not possible on sphere.");
    }
  } else {
    res.end("This is invalid type");
  }
});

server.listen(8080, function () {

  console.log("listing at port 8080");
})
