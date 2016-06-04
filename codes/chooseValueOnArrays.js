/*
  Compare two arrays and return a new array with any items not 
  found in both of the original arrays.
*/

function diff(arr1, arr2) 
{
   var newArr = [];   // Le array vide
   var firstArray;    // Le premier array
   var secondArray;   // Le deuxième array

   if(arr1.length > arr2.length) // On verifi que array 1 est le plus grand.
   {
      firstArray = arr1;
      secondArray = arr2;
   }
   else if(arr1.length === arr2.length) // Si les deux tableau ont la même la taille.
   {
      firstArray = arr1;                // On garde l'ordre des tableau
      secondArray = arr2;

      for(var i = 0; i < secondArray.length; i++) // On va parcourir le deuxième tableau.
      {
        if(firstArray.indexOf(secondArray[i]) === -1) // Si des elements du premier tableau n'existe pas dans le deuxième tableau.
        {
          newArr.push(secondArray[i]); // On les stocks dans l'array vide.
        }
      }
   }
   else
   {
      firstArray = arr2;  // On inverse l'odre des tableau
      secondArray = arr1;
   }

  for(var i = 0; i < firstArray.length; i++)        // On va parcourir le premier tableau.
  {
    if(secondArray.indexOf(firstArray[i]) === -1)   // Si des elements du premier tableau n'existe pas dans le deuxième tableau.
    {
      newArr.push(firstArray[i]);                   // On les stocks dans l'array vide.
    }
  }
 
  // Same, same; but different.
  return newArr;                                  // On retourne l'array vide.
}

$(document).ready(function() {
       $(".test").html(diff(['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']));
       //diff(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'])
      //diff(['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'])
     //diff([1, 2, 3, 5], [1, 2, 3, 4, 5])
    //diff([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4])
   //diff([], ['snuffleupagus', 'cookie monster', 'elmo'])
});
