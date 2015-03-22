var express = require('express')
var fs = require("fs");
var app = express()

app.use(express.static('public'));
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', { name: 'Blogg!', title: 'Ultra cool blog'});
})

// listen for files: /post -> /views/post.jade
app.get("/:fileName", function(req, res, next){
  if(req.params && req.params.fileName && fs.existsSync(__dirname+"/views/"+req.params.fileName+".jade")){
    res.render(req.params.fileName);
  } else {
    next();
  }
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening dat http://%s:%s', host, port)

})



