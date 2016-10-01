var products = require('./products.json');

var express = require('express');
var app = express();

app.use(express.static('static'));

app.listen(3000, function () {

  console.log('Example app listening on port 3000!');
});

var finists = products.products;

// route to send list of financial institutions
app.get("/url", function(req, res){
	res.send(finists);
})