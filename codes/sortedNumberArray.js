/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function unite(arr1, arr2, arr3) {

    var result = arguments[0]; // keep the value

	for(var i = 1; i <arguments.length; i++)
	{
		for(var j = 0; j < arguments[i].length; j++)
		{
			idx = result.indexOf(arguments[i][j]);

			  while(idx == -1)
		      {
		        result.push(arguments[i][j]);
		      	idx = result.indexOf(arguments[i][j], idx + 1);
		      }
		}
	}
	
	return result;
}

//don't touch beyond this !
$(document).ready(function() {
    //$(".test").html(fearNotLetter("abcdefghjklmno"));
    $(".test").html(unite([1, 3, 2], [5, 2, 1, 4], [2, 1]));
});
