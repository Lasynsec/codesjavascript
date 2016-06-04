text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

function findMyName(myName,theText)
{
	var nameFound = [];		 //
	var splitText = theText.split(' ');
	
	myName =  myName.toLowerCase();

	if(theText.indexOf(myName) !== -1)
	{
		return true;
	}
	else if()
	{
		return 'Your name wasn\'t found!';
	}
}

//don't touch beyond this !
$(document).ready(function() {
    $(".test").html(findMyName('Eric',text));
});