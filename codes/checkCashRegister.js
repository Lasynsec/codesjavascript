/*Algo.
	On cree une variable 'change' qui contiendra la somme à retourner
	On calcule la difference ente le prix et le cash donné par le client.
	On stock la différence dans une variable.

	Penny = 0.01;
	Nickel = 0.05;
	Dime = 0.10;
	Quarter = 0.25
	One = 1;
	Five = 5;
	Ten = 10;
	Twenty = 20;
	One Hundred = 100; 


*/
function checkCashRegister(price, cash, cid) {
  var change;
  var unitOfCurrency = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01]
  var toGiveBack = cash - price;
  cid.reverse();

  for(var i = 0; i < unitOfCurrency.length; i++){
  	if(unitOfCurrency[i] <= toGiveBack){
  		console.log(unitOfCurrency[i] + ' - ' + cid[i]);

  	}
  }
  console.log('To give back '+ toGiveBack);
  // Here is your change, ma'am.
  return change;
}

//Don't touch to the code below
$(document).ready(function()
{
  $(".test").html(checkCashRegister(19.50, 20.00, [
  												  	["PENNY", 1.01],
  												  	["NICKEL", 2.05],
  												  	["DIME", 3.10], 
  												  	["QUARTER", 4.25],
  												  	["ONE", 90.00],
  												  	["FIVE", 55.00], 
  												  	["TEN", 20.00], 
  												  	["TWENTY", 60.00], 
  												  	["ONE HUNDRED", 100.00]
  												  ]));
});