
/**
  Return true if the given string is a palindrome. Otherwise, return false.
  A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
*/
function reverseString(str) {
  
  var stringArray = str.split(''); // On divise l'agument en array.
  
  var arrayReverse = stringArray.reverse(); // On inverse le tableau
  
  var backString  = arrayReverse.join('');  // On regroupe le tableau en string
  
  return backString; // On retourne le resultat
}

function palindrome(str) 
{
  
  var ponctuationRemove = str.replace(/\.|\s|,/g,''); // On supprime les points et les espaces

  var lowerString = ponctuationRemove.toLowerCase(); // On met tout le string en minuscule
  
  console.log(lowerString);
  console.log(reverseString(lowerString));

  if(lowerString === reverseString(lowerString)) // Si les deux string correspondent
  {
    return true; // Il sagit d'un palandrome.
  }
  return false;  // Il ne s'agit pas d'un palandrome.
}


//Don't touch to the code below
$(document).ready(function()
{
	$(".test").html(palindrome("wide"));
});


