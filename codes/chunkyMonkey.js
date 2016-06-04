function chunk(arr, size) 
{
  var splitArray = []; // On creer un array vide.
  // Break it up.

  for(var i = 0;  i < arr.length; i += size) // On va parcourir l'argument par le taille définit.
  {
  	splitArray.push(arr.slice(i, i + size)); // On decoupe ensuite en fonction de l'argument size.
  }
  return splitArray;   // On renvoie le resultat.
}

//Don't touch to the code below
$(document).ready(function()
{
	$(".test").html(chunk(['a', 'b', 'c', 'd','e','f'], 2));
});
