var files = require('fs');
var http = require('http');

files.writeFile( __dirname + "/index.html", "<h1>HTML rocks!</h1");

var koalaUrl = "http://dailynewsdig.com/wp-content/uploads/2013/05/Cutest-Baby-Animals-top-10-2.jpg";
var koalaFile = files.createWriteStream( __dirname + "/node-koala.jpg");

var request = http.get(koalaUrl, function(response){
  response.pipe(koalaFile);
});