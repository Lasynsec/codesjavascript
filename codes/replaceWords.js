/*Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).*/


function myReplace(str, before, after) 
{
    var toChange = ''; // Variable vide

    if(before[0].toUpperCase() == before[0]) // Si la première lettre du mot à remplacer est en majuscule.
    {
      lastPart = after.substring(1, after.length); // On supprime la première lettre du mot replacé

      toChange =  after[0].toUpperCase() + lastPart; // On le met en majuscule
    }
    else
    {
      toChange =  after; // Sinon onrecupère le mot remplacé.
    }

   if (str.search(before) != -1) // Si le mot à remplacer correspond au choix
   {
      var newString = str.replace(before, toChange); // On le remplace par le nouveau mot

   }

    return newString; //  On retourne le resulat
}

$(document).ready(function() {
  $(".test").html(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
});
