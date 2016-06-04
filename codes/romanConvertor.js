/*Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.*/


function convert(num)
{             //0, 1,  2,  3,  4,  5,  6  
  var roman = ['I','V','X','L','C','D','M'], // on stock les chiffres romun dans une variable.
    output = [],
    arrayNumber = [],
    stringNumber;

  var tensOk = false;      // si dizaines ok.
  var hundresOk = false;   // si centaines ok.
  var thousandsOk = false; // si milliers ok;


  stringNumber = num.toString(); // on convertie les nombres en argument en string

  /**
  * On verifie le nombre de numero.
  */
  for(var i =0; i < stringNumber.length; i++) // on va parcourir le string
  {
    // arrayNumber.push(+stringNumber.charAt(i));
    arrayNumber.push(+stringNumber[i]);
  }

  /**
  * si le nombre de numéro est plus grands que 1 et inferieur à 3.
  * alors il s'agit des dizaines
  */
  if(arrayNumber.length > 1 && arrayNumber.length < 3) //Dizaine
  {console.log('dizaine');
    var tensOk = true;          // Se sont des dizaines
    var tens = arrayNumber[0];  // On recupères les dizaines 
    var units = arrayNumber[1]; // On récupère les unités
  }

  /**
  * alors si le nombre de numéro est superieur à 2 et inferieur à 4
  *alors il s'agit de centaine.
  */
  else if(arrayNumber.length > 2 && arrayNumber.length < 4)//centaine
  {console.log('centaine');
    hundresOk = true;                 // Se sont les centaines
    var Hundreds = arrayNumber[0];    // On recupère les centaines
    var tens = arrayNumber[1];        // On recupère les dizaines
    var units = arrayNumber[2];       // On recupère les unités
  }
  /**
  *
  */
  else if(arrayNumber.length > 3 && arrayNumber.length < 5) // milliers
  {console.log('milliers');
    var thousandsOk = true;
    var thousands = arrayNumber[0]; // On recupère le millers
    var Hundreds = arrayNumber[1];    // On recupère les centaines
    var tens = arrayNumber[2];        // On recupère les dizaines
    var units = arrayNumber[3];       // On recupère les unités
  }
  /**
  * alors  si il y a que unité
  */
  else if(arrayNumber.length  === 1) //unité
  {
    var units = arrayNumber[0]; // On recupère cette unité
  }

  /**
  * Milliers
  */
  if(thousandsOk) // Si il y a des milliers
  {
    if(thousands < 4) // Si le nombre des milliers et  inférieur à 4.
    {
      for(var i = 0; i < thousands; i++) // On boucle
      { 
       output.push(roman[6]); // On stock les valeurs  "M"
      }
    }
  }
  /**
  * Centaines
  */
  if(Hundreds) // si nous sommes dans les centaines.
  { 
    if(Hundreds < 4) // Si le nombre des centaines ne dépase pas 4 
    {
      for(var i = 0; i < Hundreds; i++) // On boucle
      {
        output.push(roman[4]); // On stock les valeurs "C"
      }
    }
    else if(Hundreds === 4) // Si le nombre des centaines est égale à 4
    {
       output.push(roman[4] + roman[5]); // On stock "C" suivi "D"
    }
    else if(Hundreds > 4 && Hundreds < 9) // Si le nombre des centaines est superieur à 4 et inférieur à 9
    {
      output.push(roman[5]); // On stock les "D"

      for(var i =0; i < Hundreds - 5; i++) // On boucle en enlèvant 5
      {
        output.push(roman[4]); // On stock "C"
      }
    }
    else if(Hundreds === 9) // Si le nombre des centaines est egal à 9 
    {
      output.push(roman[4] + roman[6]); // On stock "C" suivi de "M"
    }
  }
  /**
  * Dizaines
  */  
  if(tens) // si nous sommes sur les dizaines.
  {
    if(tens < 4) // si les nombre en dizaine est inférieur à 5
    {
      for(var i = 0; i < tens; i++) // On boucle
      {
        output.push(roman[2]); // On stock "X"
      }
    }
    else if (tens > 5 && tens < 9) // Si superieur à 5 et inférieur à 9
    {
      output.push(roman[3]);  // On stock "L"(50)
      console.log('dizaine :' + tens);
      for(var i = 0; i < tens - 5; i++) // On boucle en soustrayant 5
      {
        output.push(roman[2]); // On stock "XXX"
      }
    }
    else if(tens === 9) // Si le nombre en dizaine est egal à 9. 
    {
      output.push(roman[2] + roman[4]); // On Stock "X" suivi "C"
    }
    else {
      output.push(roman[2] + roman[3]); // Sinon on stock "X"(10) suivi de "L"(50)
    }
  }console.log(output);
  /**
  * si l'unité et inferieur à 4
  */
  if(units < 4) // Si le nombre d'unité est inférieur à 4 
  {
    for(var i = 0; i < units; i++) // On boucle
    {
      output.push(roman[0]); // On stock Les "I"
    }
  }
  else if(units === 4) // Si les nombre d'unité est egal à 4 
  {
      output.push(roman[0] + roman[1]); // On stock le nombre d'unité suivi de "V"
  }
  else if(units === 9) // Si le nombre d'unité  est egal à 9
  {
    output.push(roman[0] + roman[2]); // On stock le nombre d'unité "I" suivi de "X"
  }
  else
  { 
    output.push(roman[1]); // Sinon On stock "X"

    for(var i = 0; i < units - 5; i++) // On boucle en soustrayant 5
    {
      output.push(roman[0]);   // On stock les unité
    }
  } 
  var romanNum = output.join(""); // On transform le array en string
  // aler
  return romanNum; // On retourne le tout
}
/*
* don't touch this code.
*/
$(document).ready(function() {
  $(".test").html(convert(990));
});

// MMMCMXCIX