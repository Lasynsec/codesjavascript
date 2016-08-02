/*The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]["A","T"]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

combinaison :  [["A","T"],["T","A"],["C","G"],["G","C"],]
*/

function pair(str) 
{
    var output = [];                                          // le tableau qui contiendra tous en sortie.
    var adnArray = str.split("");                             // On split la chaine en array.
    var idx;                                                  // contiendra l'index courant.
    var pairAdn = [["A","T"],["T","A"],["C","G"],["G","C"]];  // tableau brut de reference adn pair.
    var pairList = ["A", "T", "C", "G"];                      // Element à trouver.

    for(var i = 0; i < adnArray.length; i++)                  // On parcours le tableau adnArray du paramètre..
    {
      idx = pairList.indexOf(adnArray[i]);                      // On recherche l'index des elements correspondant ds les array pairAdn(Reference) et pairList.

      while(idx != -1)                                          // Tant que des indexes correspondent.
      {
        output.push(pairAdn[idx]);                                  // On les stocks dans le tableau output.
        idx = pairList.indexOf(adnArray[i], idx + 1);               // On passe à l'indice suivant.
      }
    }

  return output;                                              // On retourne la valeur du tableau output(la sortie).
}

//Don't touch to the code below
$(document).ready(function()
{
  $(".test").html(pair('A,T,C'));
});