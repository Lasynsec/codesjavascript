/*
Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their corresponding HTML entities.
*/

function convert(str) 
{
	var symboles = ["&", "<", ">", '"',"\'","<>"]; 								// On recupère les symboles.
	var htmlEntities = ["&amp;","&lt;","&gt;","&quot;","&apos;","&​lt;&​gt;"];	// Les HtmlEntities.
	var rgxp = '',
		indice = '',
		result = '',
		stringme = false;

	for(var i = 0; i < symboles.length; i++) // On va parcourir les strings
	{
		indice = symboles[i]				 // On recupère un symbole à la fois.

		rgxp = new RegExp(indice, "g");      // regex

		if(str.match(rgxp)) 				// si on trouve un des symboles dans le string.
		{
			result = str.replace(rgxp, htmlEntities[i]); // On le remplace par sont equivalent en indice.
		}
	}
	
	if(result.length <= 0) // Si rien ne corresponds
	{
		result = str;	// On renvoie le string.
	}
    return result;   // On retourne le resultat.
}

//don't touch beyond this !
$(document).ready(function() {
    //$(".test").html(convert("Dolce & Gabbana"));
    $(".test").html(convert("abc"));
});
