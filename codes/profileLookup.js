//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUp(firstName, prop){
    // Only change code below this line
    var output;
    for(var key in contacts){     // On recupère les clés.
        var obj = contacts[key];  // On récupère chaque objet.
        for(var property in obj){ // On parcours les valeurs des objets. 
            // console.log(prop + ' = ' + obj[prop]);
            if(firstName === obj[property]){    // On verifie que la propriété firstName correspond à l'argument un.
                 console.log('firstName = ' + obj[property]); // test sur le firstName.
                if(obj.hasOwnProperty(prop)){   // On verifie que l'objet contenant la propriété firstName contient aussi la propriété en argument deux.
                   console.log('prop = ' + prop + ':' + obj[prop]); // test sur l'argument deux.
                   output = obj[prop]; // On recupère la valeur de la propriété de l'objet.
                } else { // sinon 
                    output = "No such property"; // rien de correspond
                }
            } 
        }
    }
    if(!output){
      output = "No such contact";
    }
    return output;
}

// Change these values to test your function
//Don't touch to the code below
$(document).ready(function()
{
    //$(".test").html(lookUp("Akira", "likes"));
    // $(".test").html(lookUp("Kristian", "lastName"));
    // $(".test").html(lookUp("Sherlock", "likes"));
    // $(".test").html(lookUp("Harry", "likes"));
    $(".test").html(lookUp("Bob", "number"));
    // $(".test").html(lookUp("Akira", "address"));
});
