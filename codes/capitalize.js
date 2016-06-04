function titleCase(str) {

	var stringLowerCase = str.toLowerCase(); 		// Tous le string sera en minuscule.
	var stringArray = stringLowerCase.split('');	// Tous splitter en array.
	var capitalizeArray = [];						// Creer un array vide.

	for(var i = 0; i < stringArray.length; i++) 	// On va prcourir le array.
	{
		capitalizeArray.push(stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1)); // On stock uniquement le premier character + puis tous les autres character à partir de l'indice 1.
	}

	//return
	var stringFinal = capitalizeArray.join(' '); // On transform le tout en string.
	return stringFinal; 						 // On retourne le string finale.
}

//Don't touch to the code below
$(document).ready(function()
{
	$(".test").html(titleCase("I'm a little tea pot"));
});