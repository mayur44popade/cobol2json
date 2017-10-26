
//Variable for xml2js conversion
var jsonObject = require( './xml2js.js' );

//Create a variable of String module
var str = require('string');

var parser = function( filename, input ,cb )
{
	var cob = jsonObject.converter( filename, function(cobol)
	{
		if( Object.keys( input ).length == 0 )
		{
			var output = '';
			var totalStorageLength = cobol.copybook.item[0].$.storage_length;
			output = output + str(output).padRight(totalStorageLength, ' ').s;
			cb( output );
		}
		else
		{
			var name4 = cobol.copybook.item[0].$.name;
			var length3 = cobol.copybook.item[0].item.length;
			var output = '';
			for( var c = 0; c < length3; c++ )
			{
				var name3 = cobol.copybook.item[0].item[c].$.name;
				if( cobol.copybook.item[0].item[c].$.picture )
				{
					var storageLength3 = cobol.copybook.item[0].item[c].$.storage_length;
					output = output + str(input[name4][name3]).padRight(storageLength3, ' ').s;
				}
				else
				{
					var length2 = cobol.copybook.item[0].item[c].item.length;
					for( var b = 0; b < length2; b++ )
					{
						var name2 = cobol.copybook.item[0].item[c].item[b].$.name;
						if( cobol.copybook.item[0].item[c].item[b].$.picture )
						{
							var storageLength2 = cobol.copybook.item[0].item[c].item[b].$.storage_length;
							output = output + str(input[name4][name3][name2]).padRight(storageLength2, ' ').s;
						}
						else
						{					
							var length1 = cobol.copybook.item[0].item[c].item[b].item.length;
							for( var a = 0; a < length1; a++ )
							{
								var name1 = cobol.copybook.item[0].item[c].item[b].item[a].$.name;
								if( cobol.copybook.item[0].item[c].item[b].item[a].$.picture )
								{
									var storageLength1 = cobol.copybook.item[0].item[c].item[b].item[a].$.storage_length;
									if( cobol.copybook.item[0].item[c].item[b].item[a].$.display_length >= input[name4][name3][name2][name1].length )
									{
										output = output + str(input[name4][name3][name2][name1]).padRight(storageLength1, ' ').s;	
									}
								}
							}
						}
					}
				}
			}	
			cb(output);
		}
	});
};

exports.parser = parser;

