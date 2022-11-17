const goodAnswerCounter = document.querySelector('.goodStats');
const badAnswerCounter = document.querySelector('.badStats');
const btnStart = document.querySelector('.start');
const btnEnd = document.querySelector('.end');
const btnCheck = document.querySelector('.check');
const scoreDiv = document.querySelector('.score');
const score = document.querySelector('.keyExc');
const btnAnswers = document.querySelectorAll("input[name]");
const numberOfKeys = document.querySelector('.keySetter')




//zwraca ilość znaków z checkboxa listowego
function numOfKeys() {
    const num = prompt('Wybierz ilość znaków przykluczowych (od 0 do 7)')
    return num

};

function numOfKeysDisabler() {

    switch (numOfKeys()) {
        case '7':
        case '6':
            document.querySelector('input#Cis-ais').disabled=true;
            document.querySelector('input#Ces-as').disabled=true;

        case '5':
            document.querySelector('input#Cis-ais').disabled=true;
            document.querySelector('input#Ces-as').disabled=true;
            document.querySelector('input#Fis-dis').disabled=true;
            document.querySelector('input#Ges-es').disabled=true;
        case '4':
            document.querySelector('input#Cis-ais').disabled=true;
            document.querySelector('input#Ces-as').disabled=true;
            document.querySelector('input#Fis-dis').disabled=true;
            document.querySelector('input#Ges-es').disabled=true;
            document.querySelector('input#H-gis').disabled=true;
            document.querySelector('input#Des-b').disabled=true;
}
}

numOfKeysDisabler()

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
        odp = button;})})

const ansUnchecker = function() {
    btnAnswers.forEach((button)=> {
        button.checked=false
})};

const checkAnswer = function(event) {


        if (score.getAttribute('key') === odp.id) {
            console.log('1')
            goodCounter();
            alert('Dobra odpowiedź');
        } else {
            badCounter();
            alert('Błędna odpowiedź');
        }
    event.preventDefault()
    ansUnchecker()
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


document.querySelector('.keySetter').value
