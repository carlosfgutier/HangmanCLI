var Word = require('./word.js');

var country = new Word();
country.pickCountry();

console.log(country.countryName);
console.log(country.nameArray);
console.log(country.blanksArray);

var Letter = function() {
	this.keyPressed = '';
	this.getKey = function() {

	}
}

for (var i = 0; i < country.countryName.length; i++) {
		if (country.countryName[i].includes(keyUp)) {
			country.blanksArray[i] = keyUp;
		}	
	}