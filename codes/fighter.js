var displayIt = document.getElementById('test');

// classe Mère.
var Character = {
	
	// properties
	name: "",
	health: 0,
	strength: 0,
	
	//constructeur.
	constructChars: function(name,health,strength){
		this.name = name;
		this.health = health;
		this.strength = strength;
	},

	//method
	describeChars: function(extention){
		extention = (typeof extention === 'undefined') ? '' : 'de race ' + extention;
		return 'The character\'s name is ' + this.name + ' and his strength is ' + this.strength + extention;
	}
};

// classe fille players
var players = Object.create(Character);
    //constructeur players
	players.constructPlayers = function(name,health,strength){
		this.constructChars(name,health,strength); // correspond à la classe mere.
	};

	// metho player.
	players.describeGodShell = function(){ // On dit
    	this.describeChars();
    };

//class fille Intelligence artificial.
var ia = Object.create(Character);
    // constructeur ai
    ia.constructiA = function(name,health,strength,race){
    	this.constructChars(name,health,strength); // correspond à la classe mere.
    	this.race; // On ajoute une propriété.
    };

     ia.describeEagleNight = function(){ // On dit
    	this.describeChars(this.race);
    };

// let's play !
//first fighter.
var eagleNight = Object.create(ia); // On cree
    eagleNight.constructiA("Zorgan",150,250,"Partaluscania"); // initialise
 

// seconds fighter
var godShell = Object.create(players); // On cree
    godShell.constructPlayers("godShell",100,400); // On initialise
	

displayIt.innerHTML = eagleNight.describeEagleNight() + '<br>' + godShell.describeGodShell();
