/*
	Dice Prototype
*/

function Dice(numSides){
	this.sides = numSides;
	var value = 0; // private value
	
	this.roll = function() {
		// roll a random value between 1 and the number of sides
		
		value = Math.floor((Math.random()*numSides)+1);
	}
	
	this.get_value = function() {
		// use instead direct access to the value
		
		if(value <= 0 || value > numSides || value == null) {
			this.roll();
		}
		
		return value;
	}
}