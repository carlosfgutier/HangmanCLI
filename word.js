var countries = ['denmark', 'angola', 'colombia', 'canada', 'burundi', 'greece', 'poland', 'fiji', 'peru', 'panama', 'india', 'iceland', 'uruguay', 'zimbabwe', 'bermuda', 'thailand'];


var countryName;
var arrName = [];
var arrBlanks= [];


var Word = function(word, nameArray, blanksArray) {
	this.word = word;
	this.nameArray = nameArray;
	this.blanksArray = blanksArray;
};

pickCountry();
var PCpick = new Word(countryName, arrName, arrBlanks);

console.log(PCpick);
// console.log(arrName);
// console.log(arrBlanks);

module.exports = Word;


//FUNCTIONS
function pickCountry() {
	var index = Math.floor(Math.random() * countries.length);
	countryName = countries[index].toUpperCase();

	arrName.push(countryName.split(''));

	for (var i = countryName.length; i >= 0; i--) {
		arrBlanks.push('_');
	}
}

//WHY IS nameArray withing [[ ]]