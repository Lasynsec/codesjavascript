function findLongestWord(str) 
{
	 var stringArray = str.split(' ');  // On divise l'argument en arrray.

	 var longestWord = stringArray[0];	// On prends en reference le premier element du tableau.

	 for(var i = 0; i < stringArray.length; i++)	// On va parcourir le tableau.
	 {
	 	if(longestWord.length < stringArray[i].length) // Si l'element en reference est plus petit que l'element courent.
	 	{
	 		longestWord = stringArray[i]; // Il remplace l'element de reference.
	 	}
	 }

	 return longestWord; // On retourne le mot le plus large.
}

//Don't touch to the code below
$(document).ready(function()
{
	$(".test").html(findLongestWord('The quick brown fox jumped over the lazy dog'));
});


