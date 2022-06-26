var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    const queryObject = url.parse(req.url, true).query;
    const year = queryObject.year;
    const month = queryObject.month;
    const date = queryObject.date;

    const name = queryObject.name;
    const currentYear = new Date().getFullYear();
    const currentMonth = (new Date().getMonth() + 1);

    if (currentYear > year) {
        res.end("Hello " + name + "\nYour current age is " + (currentYear - year) + " Years.");
    } else if ((currentMonth - month) > 0) {
        res.end("Hello " + name + "\nYour current age is " + (currentMonth - month) + " Months");
    } else {
        res.end("Hello " + name + "\nYour current age is " + (date) + " Days");

    }
});

server.listen(8080, function () {

    console.log("listing at port 8080");
})
