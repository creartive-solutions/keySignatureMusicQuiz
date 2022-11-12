const goodAnswerCounter = document.querySelector('.goodStats');
const badAnswerCounter = document.querySelector('.badStats');
const btnStart = document.querySelector('.start');
const btnEnd = document.querySelector('.end');
const btnCheck = document.querySelector('.check');
const scoreDiv = document.querySelector('.score');
const score = document.querySelector('.keyExc');
const btnAnswers = document.querySelectorAll('.btnAns');
const numberOfKeys = document.querySelector('.keySetter')



//zwraca ilość znaków z checkboxa listowego
function setKeysNumber() {
    const keyNumber = document.getElementById('keySignature').selectedIndex;
    return document.getElementsByTagName('option')[keyNumber].value;
};

//start
function excerciseStart() {
    btnStart.disabled=true;
    const imageNow = randomImage(gallery)
    score.setAttribute('src', imageNow.src);
    score.setAttribute('key', imageNow.key);

}

btnStart.addEventListener('click', excerciseStart);

//liczniki
let goodAnswer = 0;
function goodCounter() {
    goodAnswer++;
    goodAnswerCounter.innerText = `${goodAnswer}`
}

let badAnswer = 0;
function badCounter() {
    badAnswer++;
    badAnswerCounter.innerText = `${badAnswer}`;
}


//???

// document.addEventListener('change', function() {
// if (setKeysNumber() === '0') {
//     document.querySelectorAll('keyOne').disabled = true;
// }
// });



//pokazuje ilość znaków




let odp = "";
btnAnswers.forEach((button)=> {
    button.addEventListener('click', function onclick(event) {
        odp = button.dataset.key;})})
const checkAnswer = function() {

        if (score.getAttribute('key') === odp) {
            console.log('1')
            goodCounter();
            alert('Dobra odpowiedź');
        } else {
            badCounter();
            alert('Błędna odpowiedź');
        }

    excerciseStart();
};


btnCheck.addEventListener('click', checkAnswer)

const end = function() {
    const percent = goodAnswer/(goodAnswer + badAnswer)*100
    alert(`Zdobyłeś ${goodAnswer} dobrych odpowiedzi. Twoja Skuteczność to ${percent.toFixed(0)}%`)
    btnStart.disabled=false;
    score.setAttribute('src', '')
    goodAnswer = 0;
    goodAnswerCounter.innerText = `${goodAnswer}`
    badAnswer = 0;
    badAnswerCounter.innerText = `${badAnswer}`;
}

btnEnd.addEventListener('click', end)
document.addEventListener('DOMContentLoaded', excerciseStart)
