/**
  Translate the provided string to pig latin.
  Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
  If a word begins with a vowel you just add "way" to the end.
*/

function translate(str) 
{
  var consonants = ["b","c", "d", "f","g"," h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x"]; // Les consonnes
  var vowels = ["a", "e", "i", "o", "u"]; // Les voyelles

  if(consonants.indexOf(str[0]) !== -1) // Si le première lettre de l'argument est une cosonne
  {
      if(consonants.indexOf(str[1]) !== -1) // Si la seconde lettre est aussi une cosonne
      {
             var splitString = str.substring(2, str.length); // On supprime les deux  première lettre (consonnes).
             pigLatin = splitString + str[0] + str[1] + "ay";// On ajoute les deux lettre à la fin du string suivi d'un "ay".
      }
      else
      {
          var splitString = str.substring(1, str.length); // On supprime la première lettre (consonne).
          pigLatin = splitString + str[0] + "ay"; // On ajoute la première lettre à la fin du string suivi du "ay".
      }
  }
  else //vowel
  {
      pigLatin = str + "way"; // On ajoute le string suivi du "way".
  }
   return pigLatin; // On retourne la valeur de la variable.
}

//Don't touch to the code below
$(document).ready(function()
{
  $(".test").html(translate("consonant"));
});
