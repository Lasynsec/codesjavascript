function meetBonfire(argument) {
  // Good luck!
  console.log("you can read this function's argument in the developer tools", argument);

  return false;
}

//Don't touch to the code below
$(document).ready(function()
{
	$(".test").html(meetBonfire("You can do this!"));

});
