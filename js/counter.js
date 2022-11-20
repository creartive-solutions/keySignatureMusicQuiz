const goodAnswerCounter = document.querySelector('.goodStats');
const badAnswerCounter = document.querySelector('.badStats');

let goodAnswer = localStorage.getItem('goodStats');
if (goodAnswer === null) {
    goodAnswer = 0;
} else {
    goodAnswerCounter.innerText = `${goodAnswer}`;
}
function goodCounter() {
    goodAnswer++;
    goodAnswerCounter.innerText = `${goodAnswer}`;
    localStorage.setItem('goodStats', goodAnswer);
}

let badAnswer = localStorage.getItem('badStats');
if (badAnswer === null) {
    badAnswer = 0;
} else {
    badAnswerCounter.innerText = `${badAnswer}`;
}
function badCounter() {
    badAnswer++;
    badAnswerCounter.innerText = `${badAnswer}`;
    localStorage.setItem('badStats', badAnswer);
}
