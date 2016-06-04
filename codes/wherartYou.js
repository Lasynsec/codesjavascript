
/*Make a function that looks through an array (first argument) and 
returns an array of all objects that have equivalent property values (second argument).*/

/*Global Object
Object.hasOwnProperty()
Object.keys()*/

function where(collection, source) {
  var arr = [];
  // What's in a name?

  //alert(Object.keys(collection));

 // alert(source.getOwnPropertyNames());
  for(var i = 0; i < collection.length; i++)
  {
  	//alert(collection[i].first);
  	//alert(collection[i].last);

  	if(collection[i].last == source)
  	{
  		arr.push(collection[i].last);
  	}

  }
  return arr;
}

//Don't touch to the code below
$(document).ready(function()
{
	$(".test").html(where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' }));
});


//where([{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }], { 'a': 1 }));

//[ { a: 1 }, { a: 1 }, { a: 1, b: 2 } ]