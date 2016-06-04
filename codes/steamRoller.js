/**
* steamRoller = roulot compresseur;
* Flatten a nested array. You must account for varying levels of nesting.
*/ 

/*
 Pseudo code:
 On utilise la recursion.

*/
var steamroller = function(arr) {
	 var isArray = Object.prototype.toString.call(arr) === '[object Array]'; // si il s'agit d'un objet array
	  if (isArray && arr.length > 0) { // si l'agument est un array est qu'il contient un ou plusieurs element.
		    var head = arr[0]; // on recupère le premier élément de l'array.
		    var tail = arr.slice(1); // On recupère le reste des éléments à partir du deuxième éléments

	    return steamroller(head).concat(steamroller(tail));
	  } else {
	    return [].concat(arr);
	  }
};

//Don't touch to the code below
$(document).ready(function()
{
	$(".test").html(steamroller([1, [2], [3, [[4]]]]));
});