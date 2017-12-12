var inquirer = require('inquirer');
var Word = require('./word.js');
// var Letter = require('./letter.js');

var guesses = [];
var correct = [];
var blanks;

ready();
function ready() {
	inquirer.prompt([
		{
			name: 'youDown',
			type: 'confirm',
			message: 'Do you want to play hangman?'
		}
	]).then(function(user) {
		if (user.youDown === true) {
			
			var country = new Word();
			country.pickCountry();

			blanks = country.blanksArray;
			countryName = country.nameArray;

			guess();

		} else {
			console.log('Fine.');
		}
	})
};

//FUNCTIONS
var guess = function() {

	if (guesses.length === 10) {
		console.log('\nGAME OVER\n');
		guesses = [];
		correct = [];
		ready();
	} else if (correct.length === blanks.length) {
		console.log('\nNicely done!\n');
		guesses = [];
		correct = [];
		ready();
	}
		else {
			inquirer.prompt([
			{
				name: 'guess',
				type: 'input',
				message: '\nWelcome to hangman!\n\nHere is your word: \n' + blanks.join(" ") + '\n\nGuess a letter'
			}
		]).then(function(user) {
			for (var i = 0; i <countryName.length; i++) {
				if (countryName[i] == user.guess.toUpperCase()) {
					blanks[i] = user.guess;
					correct.push(user.guess);
				}
			}

			guesses.push(user.guess);
			console.log('\n================\nYou guessed: ' + user.guess)
			console.log('\nAttempts left: ' + 'lives')
			console.log('\nYour guesses so far: ' + guesses.join(", "));
			console.log('================')
			guess();
		})
	}
};