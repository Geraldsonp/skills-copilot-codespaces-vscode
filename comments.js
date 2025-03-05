// Create web server
// Create a web server that listens on port 3000. When you visit the root URL, it should display a list of all the comments. When you visit /new, it should display a form that allows you to submit a new comment. When you submit a new comment, you should be redirected to the root URL.
// You can use the comments array from the previous exercise.

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var comments = [];
app.get('/', function (req, res) {
  res.send(comments.join('<br>'));
});

app.get('/new', function (req, res) {
  res.send('<form method="post"><input name="comment"><input type="submit"></form>');
});

app.post('/new', function (req, res) {
  comments.push(req.body.comment);
  res.redirect('/');
});

app.listen(3000);