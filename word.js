var Word = function() {
	this.countryName = "";
	this.nameArray = [];
	this.blanksArray = [];
	this.countries = ['denmark', 'angola', 'colombia', 'canada', 'burundi', 'greece', 'poland', 'fiji', 'peru', 'panama', 'india', 'iceland', 'uruguay', 'zimbabwe', 'bermuda', 'thailand'];
	this.pickCountry = function() {
		var index = Math.floor(Math.random() * this.countries.length);
		this.countryName = this.countries[index].toUpperCase();

		for (var i = 0; i < this.countryName.length; i++) {
			this.nameArray.push(this.countryName[i]);
		}

		for (var i = this.countryName.length; i >= 0; i--) {
			this.blanksArray.push('_');
		}
	}
};

module.exports = Word;