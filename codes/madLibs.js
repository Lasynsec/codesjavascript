function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  result = "";
  // Your code below this line
  if(result.lenght != 0) {
      result =  "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;
  }
  else
  {
    result = "";
  }
    // Your code above this line
  return result;
}

//don't touch beyond this !
$(document).ready(function() 
{
    $(".test").html(wordBlanks("dog", "big", "ran", "quickly"));
});
