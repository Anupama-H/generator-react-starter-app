/**
 * Created by ravi.hamsa on 7/16/16.
 */
var express = require('express');
var cookieParser = require('cookie-parser')
var app = express();
app.use(cookieParser())


var proxy = require('express-http-proxy');

app.use('/api', proxy('localhost:8080'));

app.use(express.static('public'));

app.listen(8090, function () {
  console.log('React app listening on port 8090!');
});
