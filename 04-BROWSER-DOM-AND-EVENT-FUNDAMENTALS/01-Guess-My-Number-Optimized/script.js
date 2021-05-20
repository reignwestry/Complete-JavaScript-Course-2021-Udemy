'use strict';


//####################################//
//  OPTIMIZED like a real project
//####################################//

/* 
 #   1) USED DRY PRINCIPLE === When ever you have duplicate code, simplify it so that it is not in multiple locations
        Don't
        REPEAT
        YOURSELF

*/


//# VARIABLES
let secretNumber;
let score = 20;
let highScore = Number(document.querySelector('.highscore').textContent);

//# FUNCTIONS

// # OPTIMIZED 1) CREATED A FUNCTION TO CALL FROM ALL DUPLICATE LOCATIONS
// let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);//# sets the range from 1 to 19

//? GETS NEW RANDOM NUMBER
function getSecretNumber() {
    return  Number(Math.trunc(Math.random() * 20) + 1)
}

//? GRABS text from page
function getContent(location) {
    return document.querySelector(`${location}`).textContent
}
//? GRABS value from page
function getValue(location) {
    return document.querySelector(`${location}`).value
}
//? DISPLAYS text to page
function displayContent(displayLocation, text) {
    document.querySelector(`${displayLocation}`).textContent = text;
}


secretNumber = getSecretNumber();

highScore = getContent(`.highscore`);
console.log('highscore', highScore);




document.querySelector('.check').addEventListener( //# IF CHECK BUTTON IS CLICKED
    'click', function () {
        
        let guess = Number(getValue(`.guess`));
        // console.log(guess, typeof guess);
           
        if (score >= 1 && score < 25 ) {

            if (!guess) { //# IF GUESS DOES NOT HAVE A VALUE
                //? Display message in .message
                // document.querySelector('.message').textContent = 'No Number!';
                displayContent(`.message`, `No Number!`);
                
            } else if (guess === secretNumber) { //# IF GUESS IS NOT EXACTLY THE SAME AS secretNumber
                // document.querySelector('.message').textContent = 'Correct Number!';
                displayContent('.message', 'Correct Number!');
                // document.querySelector('.number').textContent = secretNumber;
                displayContent('.number', secretNumber)
                score++;
                //? DISPLAY score in .score element
                // document.querySelector('.score').textContent = score;
                displayContent('.score', score)
                        
                //? IF PLAYER WINS
                // document.querySelector('.message').textContent = 'Player Wins!';
                displayContent('.message', 'Player Wins!');
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = '30rem';
                
                //? Update High Score
                if (score > highScore) {
                    highScore = score;
                    // document.querySelector('.highscore').textContent = highScore;
                    displayContent('.highscore', highScore)
                }
                
                
            } else if (guess !== secretNumber) { //# IF GUESS DOES NOT THE SAME AS secretNumber

                
                // document.querySelector('.message').textContent = 'Too High!';
                //? TERINARY OPERATOR VERSION
                //?     IF GUESS IS GREATER THAN (>) secretNumber THEN(?) 'Too High! ELSE(:) 'Too Low
                // document.querySelector('.message').textContent =  guess > secretNumber ? 'Too High!' : 'Too Low'; 
                //? TERINARY OPERATOR IN FUNCTION
                displayContent('.message', (guess > secretNumber ? 'Too High!' : 'Too Low'));
                score--;
                // document.querySelector('.score').textContent = score;
                displayContent('.score', score);
                
            }
            //# TERINARY REPLACED WHOLE CODE BLOCK
            // else if (guess > secretNumber) {
            //     // document.querySelector('.message').textContent = 'Too High!';
            //     displayContent('.message', 'Too High!');
            //     score--;
            //     // document.querySelector('.score').textContent = score;
            //     displayContent('.score', score);
            // } else if (guess < secretNumber) {
            //     // document.querySelector('.message').textContent = 'Too Low!';
            //     displayContent('.message','Too Low!');
            //     score--;
            //     // document.querySelector('.score').textContent = score;
            //     displayContent('.score', score)
            // }

        }  
    }
);


document.querySelector('.again').addEventListener('click', function () { //# IF AGAIN BUTTON IS CLICKED

    //? SCORE reset
    score = 20;
    // document.querySelector('.score').textContent = score;
    displayContent('.score', score);

    //? CHANGE SECRETNUMBER
    // document.querySelector('.number').textContent = '?';
    displayContent('.number', '?');
    secretNumber = getSecretNumber();

    //? RESET GUESS
    document.querySelector('.guess').value = "";
    displayContent('.guess', '');

    //? REVERT BACKGROUND
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    //? REVERT MESSAGE
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayContent('.message', 'Start guessing...');

});


