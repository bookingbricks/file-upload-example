var express = require('express')
var app = express()
var AWS = require('aws-sdk');
var bodyParser = require('body-parser');

var AWS_ACCESS_KEY = 'AWS_ACCESS_KEY';
var AWS_SECRET_KEY = 'AWS_SECRET_KEY';
AWS.config.update({accessKeyId: AWS_ACCESS_KEY, secretAccessKey: AWS_SECRET_KEY});
AWS.config.region = 'eu-west-1';

app.use("/public",express.static(__dirname + '/public'));
app.use("/node_modules",express.static(__dirname + '/node_modules'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/s', function (req, res) {
	var s3 = new AWS.S3();
	var params = {Bucket: 'BUCKETNAME', Key: req.body.name};
	s3.getSignedUrl('putObject', params, function(err, url) {
		if(err) console.log(err);
		res.json({url: url});
	});
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})