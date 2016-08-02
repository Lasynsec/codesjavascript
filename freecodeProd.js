function sym(args)
{
	var output = [];
  var flattenArray = [];
	var temp = arguments[0];
  var uniqueValueOutput = [];
  var uniqueArray = [];
  var args = [].slice.call(arguments);
  var jocker = [];

  temp = temp.filter(function(item, pos) { 
    return temp.indexOf(item) == pos;
  });

    for(var i = 1; i < args.length; i++){
      uniqueArray = args[i].filter(function(item, pos){
        return args[i].indexOf(item) == pos;
      })

      if(uniqueArray.length < 2){
          jocker = uniqueArray;
      }

    	for(var j = 0; j < uniqueArray.length; j++){ 
        flattenArray.push(uniqueArray[j]); 
    	}
    }
 
    for(var i = 0; i < flattenArray.length; i++){
      idx = temp.indexOf(flattenArray[i]);
      if(idx > -1){
      
        temp.splice(idx,1); 
      }
      while(idx == -1){ 
        output.push(flattenArray[i]);
        idx = output.indexOf(flattenArray[i], idx + 1); 
      }
    }

    output = output.concat(temp).sort();

    uniqueValueOutput = output.filter(function(v,i,o){
      if(v!==o[i-1] && v!==o[i+1]){ 
        return v;
      }
    });

    if(jocker.length > 0)
    {
      uniqueValueOutput.push(jocker[0]);
    }
    return uniqueValueOutput.sort();
};

var display = document.querySelector('.test');
display.innerHTML = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);