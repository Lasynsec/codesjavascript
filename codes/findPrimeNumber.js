function sumPrimes(num) 
{
   var ret = [];                     // Un array vide
    var i, j;                        // Deux variables
    var primes = new Array(num+1);   // On creer un tableau vide avec le nombre d'element par apport à l'argument
    console.log(primes);
    for (i = 2; i <= num ; i++) {    // On va parcourir chaque element du tableau
        primes[i] = true;            // On inserer true dans chaque element du tableau.
        console.log(primes);
    }
    for (i = 2; i * i <= num ; i++) {   
        if (primes[i]) {               // Si l'element est true.
            for (j = 0; i * i + i * j <= num ; j++) {
                primes[i*i + i*j] = false;
                console.log(primes);
            }
        }
    }
    for (i = 2 ; i <= num ; i++) {
        if (primes[i]){
            ret.push(i);
        }
    }

    var returnArray = ret.reduce(function (prev, cur) { return prev + cur; }, 0);

    return returnArray;
}


//don't touch beyond this !
$(document).ready(function() 
{
    //$(".test").html(sumPrimes(10));
    $(".test").html(sumPrimes(10));
    //$(".test").html(sumPrimes());
});
