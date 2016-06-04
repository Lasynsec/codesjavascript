/*
* Return an English translated sentence of the passed binary string.
*/ 

/*
	Pseudo code:
	Splitter l'agument en array avec pour separation les espaces, et on stock le tout dans l'array stringToArray.

	On loop l'array stringToArray:
		Dans le loop on convertie chaque élément en décimal, à l'aide de:  var digit = parseInt(binary, 2);
		On stock le resultat de chaque élément dans l'array stringToDecimalArray.

	On loop l'array stringToDecimalArray:
	    Dans le loop on convertie chaque element en ASCII, à l'aide de : String.fromCharCode();
*/

function binaryAgent(str) {
	var stringToArray = str.split(" ");
	var digitArray = [];
	var digitToLetter = [];
	var outPut = '';

	stringToArray.forEach(function(element, index) {
		digitArray.push(parseInt(element,2));
	});
    
    digitArray.forEach(function(element, index) {
    	digitToLetter.push(String.fromCharCode(element));
    });
    
    outPut = digitToLetter.join('');

  	return outPut;
}

//Don't touch to the code below
$(document).ready(function()
{
	$(".test").html(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
});

