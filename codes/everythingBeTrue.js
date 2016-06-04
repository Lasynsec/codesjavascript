/*
	Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
	Remember, you can access object properties through either dot notation or [] notation.
*/
function every(collection, pre, numero) {
  var numeroToDiplay = numero
  var propertyCatch = [];
	var outPut = false;
   for(var key in collection){     // On recupère les clés.
        var obj = collection[key];  // On récupère chaque objet.
        // console.log(obj);
        for(var property in obj){ // On parcours les valeurs des objets.
        	  if(pre === property && Boolean(obj[property])) {
                   propertyCatch.push(property); 
              }
            }   
        }
        if(collection.length == propertyCatch.length){
          outPut = true;
        }
        console.log(property + ' : '+ obj[property] + ' : ' + outPut + ' : ' + numeroToDiplay);
        // return outPut;
}

//Don't touch to the code below
$(document).ready(function()
{
  var arrayResult = [
                     every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex":"male"}, {"user": "Laa-Laa", "sex":"female"}, {"user": "Po", "sex":"female"}], "sex",1),
                     every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex",2),
                     every([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age",3),
                     every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat",4),
                     every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat",5),
                     every([{"single": "yes"}], "single",6),
                     every([{"single": ""}, {"single": "double"}], "single",7),
                     every([{"single": "double"}, {"single": undefined}], "single",8),
                     every([{"single": "double"}, {"single": NaN}], "single",9)];

	 for(var i = 0; i < arrayResult.length; i++){
        $(".test").html(arrayResult[i]);
   }
});