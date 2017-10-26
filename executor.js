var cbl = require( './dataParser.js' );

//XML files path
var STUDENT = {};
STUDENT.STUDENT_ID = '04';
STUDENT.STUDENT_FIRST_NAME = 'Tapas';
STUDENT.STUDENT_LAST_NAME = 'Singh';
STUDENT.STUDENT_CLASS = '10';
STUDENT.STUDENT_IQ = '100';
STUDENT.STUDENT_PHONE_NUMBER = '88888888';
STUDENT.STUDENT_GRADE = 3.45;
STUDENT.FILLER = '';

STUDENT.STUDENT = STUDENT;
// console.log(STUDENT);

var hmhmtrst = cbl.parser( 'STUDENT.xml', STUDENT, function(strResult)
{
	console.log( strResult );
} );


