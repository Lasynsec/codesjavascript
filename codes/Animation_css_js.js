<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Animating styles with CSS animations</title>
    </head>
    <body>
    <div>
        <img id="ohnoes" src="https://www.kasandbox.org/programming-images/creatures/OhNoes.png">
        <h1>Oh noes, the world will end in
            <span id="countdown">30</span>
            seconds!
        </h1>
        <div id="info"></div>
    </div>
    
  <script>
  var infoDiv = document.getElementById("info");          // On recupère l'id info
  var countdown = document.getElementById("countdown");   // On recupère l'id countdown

  /**
  * 
  */
  var countItDown = function() {                          
    var currentTime = parseFloat(countdown.textContent); // On recupère le texte de l'id countdown et on le met en decimal.

    if (currentTime > 0) {                               // Si le nombre est superieur à zero
       countdown.textContent = currentTime - 1;             // On soustrait de 1
    } else {
        window.clearInterval(timer);                    // Sinon, On stop le decompte
    }
    
  };

  var timer = window.setInterval(countItDown, 1000);    // On lance la fonction countItDown chaque seconds
  
  // Step 1. What element do we want to animate?
  var ohnoes = document.getElementById("ohnoes");       // On recupère l'id ohnoes
  ohnoes.style.width = "50px";                          // On change le style width a 50px;
  
  // Step 2. What function will change it each time?
  var startTime = new Date().getTime();                 // On recupère le temps

/**
* Faire grossir un objet par apport au temps qui passe
*/
  var makeItBigger = function() {                       
      var currTime = new Date().getTime();              // On recupère le temps 
      var newWidth = (50 + ((currTime - startTime)/1000) * 30); 
       ohnoes.style.width = newWidth + "px"; 
       
       if (newWidth < 300) {
           window.requestAnimationFrame(makeItBigger);
       }
    
  };
  makeItBigger();
  </script>

    </body>
</html>