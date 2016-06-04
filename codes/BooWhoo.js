/*
* Check if a value is classified as a boolean primitive. Return true or false.
* Boolean primitives are true and false.
*/

function boo(bool) {
 if(typeof bool === 'boolean') { // si le type de l'agument test un bool
 	return true; // on retourne true
 } else { //sinon
 	return false; // on retourne false
 }
  
}
//Don't touch to the code below
$(document).ready(function()
{
  $(".test").html(boo([1, 2, 3]));

});
