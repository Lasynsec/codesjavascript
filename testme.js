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
//Don't touch to the code below
$(document).ready(function()
{
	$(".test").html(flattenArray);
});