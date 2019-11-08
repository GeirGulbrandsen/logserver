var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // Body parser use JSON data

app.post('/logs', function (req, res) {

    var outputFilename = './logs.json'; // path of the file to output

    var data = req.body.textParameter +" : "+ JSON.parse(req.body.numberParameter) + "\n";
    // var data = JSON.stringify(value, null, 4) + "\n";

    fs.appendFileSync(outputFilename, data); // write to the file system

    res.send('Saved to ' + outputFilename);

});

var port = 3000;
app.listen(port);
console.log('Express started on port %d ...', port);
