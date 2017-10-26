var fs = require('fs');
var xml2js = require('xml2js'); 
var parser = new xml2js.Parser();

var converter = function( filename, cb )
{
	fs.readFile('./' + filename, function(err, data) {
    parser.parseString(data, function (err, result) {
		var resultInStringFormat = JSON.stringify( result );
		result = JSON.parse( resultInStringFormat.replace(/\-/g,'_') );
		cb(result);
    });
});
};

exports.converter = converter;