
/*Remove all falsey values from an array.
Falsey values in javascript are false, null, 0, "", undefined, and NaN.*/
/*Boolean Objects
Array.filter()*/

function filterById(value)
{
	if(value === '' || value === false || value === 0 || value === undefined || value === null || typeof value === isNaN)
	{
		return false;
	}
	else
	{
		return true;
	}
}

function bouncer(arr) 
{
  // Don't show a false ID to this bouncer.
  var getRidOfFalsey = arr.filter(filterById);
  return getRidOfFalsey;
}

//Don't touch to the code below
$(document).ready(function()
{
	$(".test").html(bouncer([7, 'ate', '', false, 9]));
});


