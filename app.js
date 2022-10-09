 // This is your main function that runs when the page loads


    
var userName = prompt ('What is your name?')

function play(){
    var numberOfTries = 1;
    var secretNumber = 10;
    var input = Number(prompt (userName + ', choose a number between 1-10?'));
    var previousGuesses = [input];
    var userHistory = [];
    var existingPlayer = null;

    //for (var i = 0; i < userHistory.length; i++)
     //var object = userHistory[i];
     //if(object.name === name){
      //  existingPlayer = name;
     //}



    while (input !== secretNumber) {
        if (input > secretNumber) {
            input = Number(prompt('Sorry ' + userName +', Guess lower'))
        } else if (input < secretNumber) {
            input = Number(prompt('Sorry ' + userName + ', Guess higher'))
        } 
        numberOfTries++;
        previousGuesses.push(input);
        //userHistory.push(userHistory.name, userHistory.numberOfTries)
    }
    alert("Correct! It only took " + numberOfTries + 
    ' guesses!' + 'Your previous guesses were ' + previousGuesses + '!')
    var again = prompt('Do you want to play again?')
    if (again.toLowerCase() === 'yes') {
        playAgain()
    } else {
        alert("Have a good day!")
    }

    existingPlayer = username.push(numberOfTries)
    console.log(existingPlayer)
}
    



function playAgain(){
    play()
}

play();