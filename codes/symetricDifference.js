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
  var uniqueValueOutput = []; // to display.
  var uniqueArray = []; // remove duplicate value in arrays.
  var args = [].slice.call(arguments); // convert args in an array.
  var jocker = [];

  // ---------------------------------------------------------------// remove duplicate from first argument(array).
  console.log('array numéro : ' + (1) + ' => [' + temp + ']');

  temp = temp.filter(function(item, pos) { // Remove all duplicate values from first array.
    return temp.indexOf(item) == pos;
  });
	//-----------------------------------------------------------------// 1 step: We get all the elements from the second array.
    //console.log('array numéro : 1' + ' => [' + temp + ']');

    for(var i = 1; i < args.length; i++){ // we loop throught arrays from the second array.
      uniqueArray = args[i].filter(function(item, pos){ // remove duplicate value.
        return args[i].indexOf(item) == pos; // return unique values.
      })
        console.log('array numéro : ' + (i + 1) + ' => [' + args[i] + ']');
        if(uniqueArray.length < 2){
          jocker = uniqueArray;
        }

        console.log(jocker);
    	for(var j = 0; j < uniqueArray.length; j++){ //We loop on each element of the array.
        //console.log(uniqueArray[j]);
        flattenArray.push(uniqueArray[j]); // push all elements in the array.
    	}
    }

    //console.log('flatteren : ' + temp +','+ flattenArray);

    //-----------------------------------------------------------------// 2 step: Compare same values in arrays.
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
    uniqueValueOutput = output.filter(function(v,i,o){
      if(v!==o[i-1] && v!==o[i+1]){ // If the index is bigger than 0 and current value is not equal to the previous value.
        //console.log('index: ' + i + ' = value: ' + v + ' = prev: '+ o[i-1]);
        return v; // than return the value.
      }
    }); // Your filter
    if(jocker.length > 0)
    {
      uniqueValueOutput.push(jocker[0]);
    }
    
    return uniqueValueOutput.sort();
};

//Don't touch to the code below
// $(document).ready(function()
// {
//   	$(".test").html(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
// });


var display = document.querySelector('.test');
display.innerHTML = sym([1, 2, 3], [5, 2, 1, 4]);

// [1, 2, 3], [5, 2, 1, 4]                  return [3, 4, 5]
// [1, 2, 5], [2, 3, 5], [3, 4, 5]          return [1, 4, 5]
// [1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5] return [1, 4, 5]
// [3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3] return [2, 3, 4, 6, 7]
// [3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1] return [1, 2, 4, 5, 6, 7, 8, 9]