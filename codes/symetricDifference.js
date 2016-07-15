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
  var flattenArray = []; //all arrays from the seconds array will be flatteren...
	var temp = arguments[0]; // contain the first array in the argumment.
  var uniqueValueOutput = [];

	//-----------------------------------------------------------------// 1 step: We get all the elements from the second array.
    //console.log('array numéro : 1' + ' => [' + temp + ']');
    for(var i = 1; i < arguments.length; i++){ // we loop from the second argument's array.
    //console.log('array numéro : ' + (i + 1) + ' => [' + arguments[i] + ']');
    	for(var j = 0; j < arguments[i].length; j++){ //We loop on each element of the array.
        flattenArray.push(arguments[i][j]);
    	}
    }
    //console.log('flatteren : ' + flattenArray);

    //-----------------------------------------------------------------// 2 step:
    for(var i = 0; i < flattenArray.length; i++){ //We loop on each element of the array.
      idx = temp.indexOf(flattenArray[i]); // we get the currennt index that match in the first array.
      //console.log(idx);
      if(idx > -1){ // anything that matches
        //console.log(temp[idx]);
        temp.splice(idx,1); // Will be removed
      }
      while(idx == -1){ //as Long as nothing matches 
        output.push(flattenArray[i]); // Push it to the output array.
        idx = output.indexOf(flattenArray[i], idx + 1); // we increase to the next index.
      }
    }

    //--------------------------------------------------------------// 3 step: concat and display the result.
    output = output.concat(temp).sort();
    console.log(output);

    uniqueValueOutput = output.filter(function(v,i,o){
      if(v!==o[i-1] && v!==o[i+1]){ // If the index is bigger than 0 and current value is not equal to the previous value.
        console.log('index: ' + i + ' = value: ' + v + ' = prev: '+ o[i-1]);
        return v; // than return the value.
      }
    }); // Your filter

    return uniqueValueOutput;
};

//Don't touch to the code below
// $(document).ready(function()
// {
//   	$(".test").html(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
// });


var display = document.querySelector('.test');
display.innerHTML = sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); // result must be 1, 4, 5

// [1, 2, 3], [5, 2, 1, 4]                  return [3, 4, 5]
// [1, 2, 5], [2, 3, 5], [3, 4, 5]          return [1, 4, 5]
// [1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5] return [1, 4, 5]
// [1, 2, 5], [2, 3, 5]                     return [1, 4, 5]
// [1, 2, 5], [2, 3, 5], [3, 4, 5]          return [1, 4, 5]