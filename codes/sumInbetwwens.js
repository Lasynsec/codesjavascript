/*
We'll pass you an array of two numbers. Return the sum of those two numbers 
and all numbers between them.The lowest number will not always come first.
*/

function sumAll(arr) 
{

  if(arr[1] < arr[0]) //si seconds elements plus petit que premier.
  {
    arr.reverse(); //on inverse les elements.
  }

  for(var i = 0; i < arr.length; i++) //on parcours tous les elements du tableau.
  {
   
    //console.log("indice " + i + " : "+ arr[i]);

    if(arr[i] - arr[i-1] != 1)
    {
      var x = arr[i] - arr[i-1];
      var j = 1;

      while(j < x)
      {
        arr.push(arr[i-1] + j);
        j++;
      }
    }
  }

  var total = arr.reduce(function(a, b) {return a + b;});

    return total;
}

$(document).ready(function() {

       $(".test").html(sumAll([10, 5]));
      //$(".test").html(total);
});
