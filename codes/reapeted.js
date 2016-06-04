/**
* Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.
*/
function repeat(str, num) 
{

	var finalString = str; // On recupère le string

	if(num > 0)			// Si le nombre en argument est superieur à 0
	{
		for(var i = 0; i < num - 1; i++) // 
		{
			finalString += ' '+ str; // On sotck les string dans le variable par apport à l'argument.
		}
		return finalString; // On retourne la valeur de la variable
	}
	else
	{
		return ''; // Sinon on retourne un string vide
	}
	
}

//Don't touch to the code below
$(document).ready(function()
{
	$(".test").html(repeat('hardwork', 5));
});


