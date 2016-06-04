/*
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
*/

function drop(arr, func) 
{
  // Drop them elements.
  var resultArray = arr.filter(func); // retourne tous les element inferieur à 3.
  return resultArray;
}

//don't touch beyond this !
$(document).ready(function() 
{
    $(".test").html(drop([1, 2, 3], function(n) {return n < 3; }));
});

