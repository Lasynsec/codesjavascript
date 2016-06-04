function telephoneCheck(str) {
   var regex = /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/g;
  if (regex.test(str)) {
	    console.log('OK! : ' + str);
	    // return true;
	} else {
	    console.log('NO!');
	    // return false;
	}
}

$(document).ready(function() {
        $(".test").html(telephoneCheck("555-555-5555"));
});

