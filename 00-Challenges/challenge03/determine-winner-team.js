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