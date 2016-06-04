/*
	Create a function that sums two arguments together. If only one argument is provided, 
	then return a function that expects one argument and returns the sum.
*/
function addTogether(numberOne, numberTwo) {

	if(typeof numberOne == 'number'){
		if(arguments.length < 2){
			return function(askNumberTwo) { // la closure. 
				if(typeof askNumberTwo == 'number') {
					// return numberOne + askNumberTwo;
					console.log(numberOne + askNumberTwo) ;
				} else {
					// return undefined;
					console.log(undefined);
				}
			};

		} else if (arguments.length > 2) {
			// return undefined;
			console.log(undefined);
		} else {
			if(typeof numberTwo == 'number') {
              // return numberOne + numberTwo;
			  console.log(numberOne + numberTwo);
			} else {
				// return undefined;
		        console.log(undefined);
			}
		}  
	} else {
		    // return undefined;
		    console.log(undefined);
	}
};

// Pour appeler la closure, on utilise deux arguments comme ceci: addTogether(2)(8);
//Don't touch to the code below
$(document).ready(function()
{
  // $(".test").html(addTogether(6));
  $(".test").html(addTogether(2)([3]));
});
 
 // addTogether(2, 3) should return 5. OK
 // addTogether(2)(3) should return 5. OK
 // addTogether("http://bit.ly/IqT6zt") should return undefined. OK
 // addTogether(2, "3") should return undefined. OK
 // addTogether(2)([3]) should return undefined. OK