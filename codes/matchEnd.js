/**
Check if a string (first argument) ends with the given target string (second argument).
*/
function end(str, target) 
{
  	 var answer = false;

	 if(str.match(/\s/g)) //Si le string contient des espaces.
	 {
	 	var stringArray = str.split(' '); //On transforme le string en tableau.

	 	var lastWord = stringArray[stringArray.length -1]; //On récupère le dernier éléments du tableau.

	 	if(lastWord == target) // si le dernier element correspond à l'element en argument.
	 	{
	 		 answer = true;
	 	}
	 	else
	 	{
	 		answer = false;
	 	}

	 }
	else
	{
 	  if(str.substr(-1) != target)
	  {
	  	answer = false;
	  }
	  else
	  {
	  	answer = true;
	  }
	}
	return answer ;
}  

//Don't touch to the code below
$(document).ready(function()
{
	$(".test").html(end('If you want to save our world, you must hurry. We dont know how much longer we can withstand the fountain', 'mountain'));

});


