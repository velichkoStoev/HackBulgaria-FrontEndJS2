var express = require('express')
var fs = require("fs");
var products = require("./products.json");


var app = express()

app.use(express.static('public'));
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', {products: products});
})

app.get("/:fileName", function(req, res, next){
  if(req.params && req.params.fileName){
    var fileName = req.params.fileName.replace(".html", "");

    if(fs.existsSync(__dirname+"/views/+ " + fileName + ".jade")){
        res.render(fileName);
    } else if (products[fileName]){
        res.render('product', {product: products[fileName]});
    } else {
        next();
    }
  }
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening dat http://%s:%s', host, port)

})



