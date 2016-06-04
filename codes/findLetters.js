/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) 
{
   var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; // Tableau reference des 26 lettres de l'alphabet
   var makeArry = str.split("");  // On divise l'argument en array. 
   var missing = '';              // Aucune lettre ne manque
   var newAlphabet = [];          // Contiendra les lettres dans un tableau
   var removeRear;

  //Remove rear
  if(makeArry[makeArry.length -1] !== alphabet[alphabet.length -1]) // Si les dernier element ne correspondent pas
  {
    for(var i = 0; i < alphabet.length; i++) // On va parcourir le tableau de reference.
    {
      if(alphabet[i] === makeArry[makeArry.length -1])  // Si l'element en indice correspond au dernier element de l'argument.
      {
        removeRear = alphabet.slice(0,i + 1); // On recupère tous se qui se trouve avant celui-ci.
      }
    }
  }

  //Remove front
  if(alphabet[0] !== makeArry[0]) // si les premier éléments des tableaux ne correspondent pas.
  {
    for(var i = 0; i < removeRear.length; i++) // On va parcourir le nouvau tableau.
    {
      if(removeRear[i] === makeArry[0])       // Si l'elements en indice correspond au premier element de l'argument.
      {
        newAlphabet = removeRear.slice(i,removeRear.length); // On garde le tout à partir de cette element.
      }
    }
  }
  else
  {
     newAlphabet = removeRear;  // On copie le tout dans un nouveau array.
  }

  for(var i = 0; i < newAlphabet.length; i++)   // On va parcourir le nouveau array 
  {
    if(makeArry.indexOf(newAlphabet[i]) === -1) //On verifier si toute les lettre choisie son presentent
    {
       missing = newAlphabet[i];  // On recupère la lettre qui manque
    }
  }

  if(missing.length == 0)   // Si aucune lettre ne manque 
  {
    missing = 'undefined';  
    return missing;       // On affiche a message
  }
    return 'Il manque la lettre ' + missing;  // On renvoie le tout
}

//don't touch beyond this !
$(document).ready(function() {
    //$(".test").html(fearNotLetter("abcdefghjklmno"));
    $(".test").html(fearNotLetter("tuv"));
});
