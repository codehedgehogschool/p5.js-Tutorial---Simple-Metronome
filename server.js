/*
  CODE HEDGEHOG
  Simple Metronome with P5.js
  @author Stephen Monslow
*/
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/index.html', function(req, res){
  res.sendfile('./public/index.html');
});

app.listen(3000);
console.log("listening on http://localhost:3000");