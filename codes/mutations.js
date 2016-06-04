
/*Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ['hello', 'Hello'], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ['hello', 'hey'] should return false because the string 'hello' does not contain a 'y'.
Lastly, ['Alien', 'line'], should return true because all of the letters in 'line' are present in 'Alien'.*/

/*Array.indexOf()*/

function mutation(arr) 
{
	var output = false;  // La sorti est par defaut false.

	var matchTable = []; //  

	var indexZero = arr[0].toLowerCase().split(''); // On divise le premier element en array.

	var indexOne = arr[1].toLowerCase().split('');  // On divise le seconds element en array.

	for(var i = 0; i <indexOne.length; i++)			// On parcour le seconds array.
	{
		if(indexZero.indexOf(indexOne[i]) != -1)	// a chaque fois que l'indice courant se trouve dans le array premier
		{
			matchTable.push(indexOne[i]);			// On pousse cette element dans le array matchtable
		}
	}
	console.log('matchTable ' + matchTable);
	console.log('indexOne ' + indexOne);

	if(matchTable.length == indexOne.length) // Si l'array matchTAble et l'array indexOne ont la même longeur.
	{
		output =  true;	// On retourne true
	}
	else 	// Sinon
	{
		output = false; // On retourn false
	}

	return output;
}


//Don't touch to the code below
$(document).ready(function()
{
	$(".test").html(mutation(['floor', 'for']));
});


