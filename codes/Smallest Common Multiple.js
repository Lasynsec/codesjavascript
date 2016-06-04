/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

function smallestCommons(arr) {
  
  // Sort array from greater to lowest
  arr.sort(function(a, b) {return b - a;}); // Inverser les arguments
  
  // Create new array and add all values from greater to smaller from the original array.
  var newArr = [];                         // Creer un array vide newArr // .
  for (var i = arr[0]; i >= arr[1]; i--) { // On recupère tous les nombres entre 1 et 5 soit [4,3,2].
    console.log(i);
    newArr.push(i);                        // On chaque valeur dans un nouveau tableau.
  }

  // Variables needed declared outside the loops.
  var quot = 0; // le quotien
  var loop = 1; // On recupère l'iteration
  var n; // La taille du tableau

  do { // run code while n is not the same as the array length.
    quot = newArr[0] * loop * newArr[1];
    console.log('element-1: ' + newArr[0]);
    console.log('element-2: ' + newArr[1]);
    console.log('loop:' + loop);
    console.log('quotient:' + quot);

    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }
    loop++;
  } while (n !== newArr.length); // On boucle tant que le array n'est pas fini.
  return quot;                   // On retourne le resultat.
}

//Don't touch to the code below
$(document).ready(function()
{
  $(".test").html(smallestCommons([1,5]));
});
