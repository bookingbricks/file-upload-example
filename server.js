var express = require('express')
var app = express()
var AWS = require('aws-sdk');
var bodyParser = require('body-parser');
var AwsS3Form = require('aws-s3-form');

var formGen = new AwsS3Form({
    accessKeyId:        "XXX",
    secretAccessKey:    "XXX",
    region:             "eu-west-1",
    bucket:             "jontelm",
    redirectUrlTemplate:"",
    keyPrefix: 			"users/44/"
  });

app.use("/public",express.static(__dirname + '/public'));
app.use("/node_modules",express.static(__dirname + '/node_modules'));

app.post('/s', function (req, res) {
	res.json(formGen.create(""));
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})