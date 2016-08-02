/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

function smallestCommons(arr) {
  
  // Sort array from greater to lowest
  arr.sort(function(a, b) {return b - a;}); // Inverser les arguments du plus grand au plus petit.
  // Create new array and add all values from greater to smaller from the original array.
  var newArr = [];                         // Creer un array vide newArr // .
  for (var i = arr[0]; i >= arr[1]; i--) { // Tant que l'index 0 est superieur ou égal à l'index 1 exemple(index 0 => 5 et index 1 => 1) on decremente.
    newArr.push(i);                        // On ajoute chaque nouvelle index dans le tableau.
  }

  // Variables needed declared outside the loops.
  var quot = 0; // le quotien
  var loop = 1; // On recupère l'iteration
  var n = 2; // La taille du tableau

  do { // run code while n is not the same as the array length.
    quot = newArr[0] * loop * newArr[1]; // On multiplie les deux premiers elements avec les boucles.
    
    //console.log(newArr[0] + ' X ' + loop + ' X '+ newArr[1] + ' = ' + quot);

    for (n ; n < newArr.length; n++) { // On va parcourir le tableau newArr à partir du 2 ème élément..
      console.log('index: ' + n + ' = ' +' valeur : ' + newArr[n]);
      if (quot % newArr[n] !== 0) { // Si le multiple des deux premiers éléments du tableau n'est pas divisible par le reste des éléments du tableau.
        break; // On passe à l'élément suivant.
      }
    }

    loop++; // On incremente la loop.

  } while (n !== newArr.length); // On boucle tant que le array n'est pas fini.

  return quot;                   // On retourne le resultat.
}

//Don't touch to the code below
$(document).ready(function()
{
  $(".test").html(smallestCommons([1,5]));
});

// console.log('element-1: ' + newArr[0]);
// console.log('element-2: ' + newArr[1]);
// console.log('loop:' + loop);
// console.log('quotient:' + quot);