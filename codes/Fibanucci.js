/*
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.
As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.
*/

function sumFibs(num) {
  var fib0 = 0;
  var fib1 = 1;
  var fib = 1;
  var sum = fib0;

  while ( fib <= num){  // tant que l'argument est inferieur et egale à fib.
    if (fib % 2) {      // si fib modulo est true
        sum += fib1;    // On ajoute fib 1 à la somme.
    }

    fib = fib0 + fib1; 
    fib1 += fib0;
    fib0 = fib1 - fib0;
  }
  return sum;
}

//don't touch beyond this !
$(document).ready(function() {

    //$(".test").html(convert("Dolce & Gabbana"));
    $(".test").html(sumFibs(4));
});

