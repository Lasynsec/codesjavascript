/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {

  var deleteSpace = '',
      result = '',
      stringToArray = '';

  var makeStringLower =  str.toLowerCase();

  if(str.match(/\s/g)) //Si le string contient des espaces.
  {
  	result = makeStringLower.replace(/\s/g,'-'); 
  }
  else if(str.match(/_/g))
  {
  	result = makeStringLower.replace(/_/g,'-'); 
  }
  else if(str.match(/[A-Z][a-z]+/g))
  {
  	 var stringToArray = str.split(/(?=[A-Z])/); //separe devant chaque majuscule.

  	 var arrayTostring = stringToArray.join("-");

  	 result = arrayTostring.toLowerCase();

  }

  return result;
}

//don't touch beyond this !
$(document).ready(function() {

    //$(".test").html(convert("Dolce & Gabbana"));
    $(".test").html(spinalCase('The_Andy_Griffith_Show'));
});

