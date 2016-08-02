var tab = [[1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]];
var flattenArray = [];
var uniqueArray = [];

for(var i = 1; i < tab.length; i++){ // we loop from the second argument's array.
	uniqueArray = tab[i].filter(function(item, pos){
		return tab[i].indexOf(item) == pos;
	})
	console.log(uniqueArray);
    console.log('array numéro : ' + (i + 1) + ' => [' + tab[i] + ']');
	for(var j = 0; j < uniqueArray.length; j++){ //We loop on each element of the array.

    //console.log(typeof tab[i][j]);
    flattenArray.push(uniqueArray[j]);
	}
}

console.log(flattenArray);
//Don't touch the code below
$(document).ready(function()
{
	$(".test").html(flattenArray);
});

// [1, 2, 3], [5, 2, 1, 4]                  return [3, 4, 5]
// [1, 2, 5], [2, 3, 5], [3, 4, 5]          return [1, 4, 5]
// [1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5] return [1, 4, 5]
// [3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3] return [2, 3, 4, 6, 7]
// [3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1] return [1, 2, 4, 5, 6, 7, 8, 9]