//create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var comments = [];
var server = http.createServer(function(req, res) {
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    if (pathname === '/') {
        fs.readFile('./index.html', function(err, data) {
            if (err) {
                res.end('404');
            } else {
                res.end(data);
            }
        });
    }
    if (pathname === '/getComments') {
        var str = JSON.stringify(comments);
        res.end(str);
    }
    if (pathname === '/submitComment') {
        var comment = urlObj.query;
        comments.push(comment);
        res.end('success');
    }
}
server.listen(8080);
console.log('server is listening on 8080');