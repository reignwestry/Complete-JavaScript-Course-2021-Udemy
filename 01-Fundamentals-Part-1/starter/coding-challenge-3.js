console.log("//#########################//");
console.log("//#### Coding Challenge 3 ####");
console.log("//#########################//");
console.log("    "); // blank line

//////////////////////////////////////////////////
// * Coding Challenge 3

/*
*   There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with
*  the highest average score wins the trophy!
*   ? 1. Calculate the average score for each team, using the test data below
*   ? 2. Compare the team's average scores to determine the winner of the competition, and print it to the console.
*  Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
*
*   3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a
*  higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator
*  to test for minimum score, as well as multiple else-if blocks :)
*
*   4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and
*  both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
*
* TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
*
* */

//TEST1 === DOLPHINS WIN
// const dolphins1 = 96;
// const koalas1 = 88;
//
// const dolphins2 = 128;
// const koalas2 = 87;
//
// const dolphins3 = 89;
// const koalas3 = 110;

//TEST2 === KOALAS WIN
// const dolphins1 = 96;
// const koalas1 = 88;
//
// const dolphins2 = 128;
// const koalas2 = 87;
//
// const dolphins3 = 89;
// const koalas3 = 110;

//TEST 3 === DRAW

const dolphins1 = 96;
const koalas1 = 96;

const dolphins2 = 87;
const koalas2 = 87;

const dolphins3 = 110;
const koalas3 = 110;

function getAvgScore (score1, score2, score3){
   let avgScore = (score1 + score2 + score3) / 3;
   return avgScore;
}

//# GET AVG SCORES
let dolphinScore = getAvgScore(dolphins1, dolphins2, dolphins3);
console.log(dolphinScore);

let koalaScore = getAvgScore(koalas1, koalas2, koalas3);
console.log(koalaScore);
 //? 2. Compare the team's average scores to determine the winner of the competition, and print it to the console.
   //?  Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).


if (dolphinScore > koalaScore && dolphinScore >= 100 ) { //dolphins have a higher score
   console.log(`Dolphins WIN! Dolphins ${dolphinScore} Koalas ${koalaScore}`);
} else if (koalaScore > dolphinScore && koalaScore >= 100 ) {  //koalas have a higher score
   console.log(`Koalas WIN! Dolphins ${dolphinScore} Koalas ${koalaScore}`);
} else if ( koalaScore === dolphinScore || koalaScore && dolphinScore <= 100 ) { // same score or under 100 They
   // have the same score
   console.log(`IT WAS A DRAW! Dolphins ${dolphinScore} Koalas ${koalaScore}`);
}