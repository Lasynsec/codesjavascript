/*
*Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is 
the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric
difference you take (say on a set D = {2, 3}), you should get the set with elements which are in 
either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4})
*/

function sym(args)
{
	  var output = []; // contain the output.
	  var temp = arguments[0]; // contain the first array in the argumment.
    console.log('array numéro : 1' + ' => [' + temp + ']');
    for(var i = 1; i < arguments.length; i++){ // we loop from the second argument's array.
    console.log('array numéro : ' + (i + 1) + ' => [' + arguments[i] + ']');
    	for(var j = 0; j < arguments[i].length; j++){ //We loop on each element of the array. 
	    	idx = temp.indexOf(arguments[i][j]); // we get the currennt index that match.
        
        console.log(idx);
        if(idx > -1){
          //console.log(temp[idx]);
          temp.splice(idx,1);
        }
			  while(idx == -1){
		        output.push(arguments[i][j]);
		      	idx = output.indexOf(arguments[i][j], idx + 1); // we increase to the next index.
		    }
    	}
    }

    output = output.concat(temp);

    var uniqueValueOutput = output.filter(function(item, pos) {
      return output.indexOf(item) == pos;
    })

    return uniqueValueOutput.sort();
};

//Don't touch to the code below
// $(document).ready(function()
// {
//   	$(".test").html(sym([1, 2, 3], [5, 2, 1, 4]));
// });


var display = document.querySelector('.test');
display.innerHTML = sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); // result must be 1,4,5

