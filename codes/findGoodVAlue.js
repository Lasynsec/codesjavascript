/*
* Create a function that looks through an array (first argument) 
* and returns the first element in the array that passes a truth test (second argument).
*/

function find(arr, func) 
{
   var result = arr.some(func), // On filtre les elements pair.
       resultArray = [];        // On tableau qui va recevoir le resultat.
   if(result)                   // Si il existe des elements pairs
   {
      for(var i = 0; i < arr.length; i++) // On va parcourir le array.
      {
        if(arr[i] % 2 === 0)              // On recupère ses éléments
        {
          resultArray.push(arr[i]);       // On les stock dans un array.
        }
      }
      return resultArray[0];              // On retourne le premier element du tableau
   }
   else
   {
    return 'No matches!!';                // Au cas contrainre on renvoie un message.
   }
  
}

//don't touch beyond this !
$(document).ready(function() 
{
    $(".test").html(find([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
});

