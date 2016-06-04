/**
* PseudoCode: 
* On creer un tableau alphabétique.
* On convertie l'arguement string en Array.
* On creer un array vide qui contiendra le string decrypté
* On fait un loop sur l'array string.
*		On recherche des elements de l'array ds l'argument qui correspondent aux éléments de l'array alphabétique.
*		Si ça correspond, on verifie l'index de cette élément.
*			Si l'index de l'élément se trouve avant l'index 13.
*				 On récupère la valeur de cette indice (+13);
*			Si l'index de l'élément se trouve après l'index 13;
*				 On recupère la valeur de l'indice (-13);
*/

function rot13(str) {
	var strToArray = str.split(""); // On split la chaine en array
	var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; // Tableau reference des 26 lettres de l'alphabet
	var decryptedArray = [];
	var decryptFinal = '';

	for(var i = 0; i < strToArray.length; i++)                  // On parcours le tableau strToArray.
    {
      idx = alphabet.indexOf(strToArray[i]); 					// On recherche des elements correspondant.
      console.log(idx)
      	if(idx >= 0 && idx < 13){
      		 decryptedArray.push(alphabet[idx + 13]);
      		 console.log(alphabet[idx] +' : ' + alphabet[idx + 13]);
      	}else if(idx >= 13) {
      		 decryptedArray.push(alphabet[idx - 13]); 
      		 console.log(alphabet[idx] +' : ' + alphabet[idx - 13]);
      	} else {
      		console.log('non présent ' + strToArray[i]);
      		decryptedArray.push(strToArray[i]);
      		console.log(strToArray[i] +' : ' + strToArray[i]);
      	}
    }
    decryptFinal = decryptedArray.join(''); // On transform le tout en string.
	return decryptFinal;
}

//don't touch beyond this !
$(document).ready(function() {
    // $(".test").html(rot13("SERR PBQR PNZC"));
    // // $(".test").html(rot13("SERR CVMMN!"));
    // // $(".test").html(rot13("SERR YBIR?"));
    $(".test").html(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));
});