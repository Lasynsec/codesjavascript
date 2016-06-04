/**
* Return an array consisting of the largest number from each provided sub-array. 
* For simplicity, the provided array will contain exactly 4 sub-arrays.
*/

function largestOfFour(arr) 
{
  // You can do this!
  var largsestNumberArray = [];      // Un tableau vide 
  var largestNumber  = arr[0][0];    // On recupère la valeur du premier indice du seconds niveau de l'array.

  //alert(arr[0][0]);
  for(var i = 0; i < arr.length ; i++)      // On parcours chaque éléments du premier niveau de l'array. 
  {
    for(var j = 0; j < arr[i].length; j++) //  On va parcourir chaque elements du seconds niveau de l'array
    {
      if(largestNumber < arr[i][j])        // Si l'indice courent est superieur à largestNumber;
      {
        largestNumber = arr[i][j];        // ALors celui ci devient le numero le plus grand
      }
    }

    largsestNumberArray.push(largestNumber); // Alors on le stock dans le array largsestNumberArray.
    largestNumber = 0;                      //  On reinitialise largestNumber et passe à l'indice suivant du premier niveau.
  }
  return largsestNumberArray;               // On retourne la valeur de largsestNumberArray;
 }
//Don't touch to the code below
$(document).ready(function()
{
  $(".test").html(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

});


