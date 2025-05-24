/*
    Coding Challenge #3

    There are two gymnastics teams, Dolphins and Koalas. They compete against each
    other 3 times. The winner with the highest average score wins a trophy!

    Your tasks:

    1. Calculate the average score for each team, using the test data below
    2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that
    as well (draw means they have the same average score)

    Test data:
    
    Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
*/

let dolphinsAverageScore = (96 + 108 + 89) / 3;
let koalasAverageScore = (88 + 91 + 110) / 3;

let resultMessage = '';

if (dolphinsAverageScore === koalasAverageScore) {
    resultMessage = "There's no winner for this tournament, there is a tie.";
} else if (dolphinsAverageScore > koalasAverageScore) {
    resultMessage = "Dolphins are the winners!!";
} else {
    resultMessage = "Koalas are the winners!!";
}

console.log(resultMessage);