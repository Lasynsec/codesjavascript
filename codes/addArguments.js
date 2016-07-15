/*
	Create a function that sums two arguments together. If only one argument is provided, 
	then return a function that expects one argument and returns the sum.
*/
function addTogether(numberOne, numberTwo) {

	if(typeof numberOne == 'number'){ 					// Si le type du premier argument est un nombre.
		if(arguments.length < 2){ 								// Si il y qu'un seul argument.
			return function(askNumberTwo) { 							// On crée la closure qui demandera un deuxième argument. 
				if(typeof askNumberTwo == 'number') { 						// Si le deuxième argument est un nombre.
					return numberOne + askNumberTwo; 							// On retourne une addition des deux arguments.
				} else {												    // Si le deuxième argument n'est pas un nombre.
					return undefined;                  							// On retourne indefinie
				}
			};

		} else if (arguments.length > 2) { 				       // Ou si il y a plus de deux arguments.
			return undefined;										// On retourne indefinie.
		} else {                                               // Sinon il y bien deux arguments.
			if(typeof numberTwo == 'number') {                      // Si le deuxième argument est un nombre.
              return numberOne + numberTwo;                              // On additionne et retoune la valeur des deux arguments.
			} else {										   // Si le deuxième argument n'est pas un nombre. 
				return undefined;									// On retourne indefenie.
			}
		}  
	} else {                                           // Si le premier argument n'est pas un nombre.
		    return undefined;                             // On retourne indéfinie.
	}
};

// Pour appeler la closure, on utilise deux arguments comme ceci: addTogether(2)(8);
//Don't touch to the code below
$(document).ready(function()
{
  // $(".test").html(addTogether(6));
  $(".test").html(addTogether(2)(3));
});
 
 // addTogether(2, 3) should return 5. OK
 // addTogether(2)(3) should return 5. OK
 // addTogether("http://bit.ly/IqT6zt") should return undefined. OK
 // addTogether(2, "3") should return undefined. OK
 // addTogether(2)([3]) should return undefined. OK