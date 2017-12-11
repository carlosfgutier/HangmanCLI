var inquirer = require('inquirer');

var guesses = [];
var blanks = ['_', '_', '_', '_' ]

inquirer.prompt([
	{
		name: 'youDown',
		type: 'confirm',
		message: 'Do you want to play hangman?'
	}
]).then(function(user) {
	if (user.youDown === true) {
		guess();
	} else {
		console.log('Fine.');
	}
})

//FUNCTIONS
var guess = function() {

	if (guesses.length === 10) {
		console.log('\nGAME OVER\n');
	} 
	//else if (correctArr.length === wordArr.length) {
	// 	console.log('\nNicely done!\n');
	// }
		else {
		//Do function to get random word as string of blanks
		inquirer.prompt([
			{
				name: 'guess',
				type: 'input',
				message: '\nWelcome to hangman!\n\nHere is your word: \n' + blanks.join(" ") + '\n\nGuess a letter'
			}
		]).then(function(user) {
			//If guess is correct, update word
			guesses.push(user.guess);
			console.log('\n================\nYou guessed: ' + user.guess)
			console.log('\nAttempts left: ' + 'lives')
			console.log('\nYour guesses so far: ' + guesses.join(", "));
			console.log('================')
			guess();
		})
	}
};