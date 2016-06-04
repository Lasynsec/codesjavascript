/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */

var doSearch = function(array, targetValue) {
	var min = 0;				// Premier element
	var max = array.length - 1; // Dernier element
    var guess;					// nombreMagic
    
    while(max >= min)			// 
    {
        guess = Math.floor((min + max) / 2); // On divise le tableau par deux.
     	console.log(guess + ' : ' + primes[guess]); 
        if(primes[guess] === targetValue) // Si le nombreMagic est pas egal au choix  
        {  
            return guess;	// On renvoie le nombreMagic 
        }
        else if(primes[guess] < targetValue)	// Si le nombreMagic est inferieur au choix
        {
            min = guess + 1;							// Le min devient le nombreMagic + 1
        }
        else 									// Sinon
        {
            max = guess - 1;							// Le max deviens le nombreMagic -1
        }
    }
    return -1;	// On renvoie -1
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 37);

//don't touch beyond this code!
$(document).ready(function() {
    // $("#response").html(binaryCode(primes));
    $("#test").html(result);
});

