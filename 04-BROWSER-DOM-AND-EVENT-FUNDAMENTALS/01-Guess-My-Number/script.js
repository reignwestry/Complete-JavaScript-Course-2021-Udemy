'use strict';


//####################################//
//  DOM MANIPULATION
//####################################//

/*
    # DOM === DOCUMENT OBJECT MODEL: 
    *   Structured representation of HTML documents.
    *   Allows Javascript to access HTML elements and Styles to manipulate them.
    *   Connection point between HTML points and javascript
    *   DOM TREE STRUCTURE
    *   EACH HTML element is one object or node
    *   DOM is not a part of Javascript
    *   DOM Methods and Properties are WEB APIs that JS can interact with
    *   API: Application Programming Interface
    



*/

//# DOCUMENT QUERY SELECTOR
//# document.querySelector() === grabs the html element in the browser
//# .textContent === grabs the html element text in the browser

//? GRABS TEXT FROM .message
//  console.log(document.querySelector('.message').textContent);
//? GRABS & SETS THE CONTENT OF THE ELEMENT
// console.log(document.querySelector('.message').textContent = '🎉Correct Number!'); 
// console.log(document.querySelector('.number').textContent = 13);
// console.log(document.querySelector('.score').textContent = 20);

//? GRABS THE VALUE OF THE INPUT ELEMENT
// document.querySelector('.guess').value = 23; //? SETS THE INPUT 
// console.log(document.querySelector('.guess').value);


// const anSwer = document.querySelector('number').textContent; // grabs

//# EVENT LISTENERS
//#==================

//? 1) ADD AN EVENT LISTENER
//? 2) CREATE AN EVENT HANDLER
//? 2) CREATE A FUNCTION TO RUN ONCE CLICKED


let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);//# sets the range from 1 to 19
// console.log(number);
// document.querySelector('.number').textContent = secretNumber;
//# Math.random() rolls a random number
//# Math.trunc() cuts out all decimal numbers

//# grabs score value, converts to a number and stores score
let score = 20;




function updateHighScore() {
    let highScore = Number(document.querySelector('.highscore').textContent);
    //? ADD 1 to highScore
    highScore++;
    document.querySelector('.highscore').textContent = highScore;
    
    console.log(`HIGHSCORE: ${highScore}`);
 

}

//# CHECK CLICK EVENT Handler
//#----------------------
// addEventListener() === ADDS A LISTENER FOR class 'click'
document.querySelector('.check').addEventListener(
    'click', function () {
        
        let guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        // guess = 5;  console.log('guess', guess)
        // secretNumber = 5;


            
        if (score >= 1 && score < 25 ) {

            // falsy === if there is no value in guess
            if (!guess) {
                //? Display message in .message
                document.querySelector('.message').textContent = 'No Number!';

            } else if (guess === secretNumber) {
                document.querySelector('.message').textContent = 'Correct Number!';
                document.querySelector('.number').textContent = secretNumber;
                score++;
                //? DISPLAY score in .score element
                document.querySelector('.score').textContent = score;
                        
                //? IF PLAYER WINS
                document.querySelector('.message').textContent = 'Player Wins!';
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = '30rem';
                console.log('Player Wins!')
                updateHighScore();
                
            } else if (guess > secretNumber) {
                document.querySelector('.message').textContent = 'Too High!';
                score--;
                document.querySelector('.score').textContent = score;
            } else if (guess < secretNumber) {
                document.querySelector('.message').textContent = 'Too Low!';
                score--;
                document.querySelector('.score').textContent = score;
            }

        }  else {
            document.querySelector('.message').textContent = 'You Lost!';

        }
    }
);

/////////////////////////////////////////////
//#  Coding Challenge #1

/* 
?    Implement a game rest functionality, so that the player can make a new guess! Here is how:

    
?    1. Select the element with the 'again' class and attach a click event handler
?    2. In the handler function, restore initial values of the score and number variables
?   3. Restore the initial conditions of the message, number, score and guess input field
?    4. Also restore the original background color (#222) and number width (15rem)

    Good Luck!

*/

//# AGAIN CLICK EVENT HANDLER
//#--------------------------
document.querySelector('.again').addEventListener('click', function () {

    //? SCORE reset
    score = 20;
    document.querySelector('.score').textContent = score;
    
    //? CHANGE SECRETNUMBER
    document.querySelector('.number').textContent = '?';
    secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
    // console.log(secretNumber);
    //? RESET GUESS
    document.querySelector('.guess').value = "";

    //? REVERT BACKGROUND
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    //? REVERT MESSAGE
    document.querySelector('.message').textContent = 'Start guessing...';

});


