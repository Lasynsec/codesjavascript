for(var i = 0; i <arguments.length; i++){
 		for(var j = 0; j < arguments[i].length; j++){
 			idx = output.indexOf(arguments[i][j]);
            
            console.log(idx);
            //console.log(arguments[idx]);
 		}

 	  while(idx == -1)                                        // Tant que des éléments correspondent
	    {
	        	output.push(arguments[idx]);                            // On les stock dans le tableau output.
	        	idx = output.indexOf(arguments[i], idx + 1);         // On passe à l'indice suivant.
	    }
 	}