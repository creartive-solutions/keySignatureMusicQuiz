const goodAnswerCounter = document.querySelector('.goodStats');
const badAnswerCounter = document.querySelector('.badStats');
const btnStart = document.querySelector('.start');
const btnEnd = document.querySelector('.end');
const btnCheck = document.querySelector('.check');
const scoreDiv = document.querySelector('.score');
const score = document.querySelector('.keyExc');
const btnAnswers = document.querySelectorAll("input[name]");
const numberOfKeys = document.querySelector('.keySetter')





//filtrowanie buttonów odpowiedzi
function numOfKeysDisabler() {
    function numOfKeys() {
        const num = prompt('Wybierz ilość znaków przykluczowych (od 0 do 7)')
        return num

    };

    switch (numOfKeys()) {
        case '7':
        case '6':
            document.querySelector('input#Cis-ais').setAttribute('type', 'hidden')
            document.querySelector('input#Ces-as').setAttribute('type', 'hidden')
            break;

        case '5':
            document.querySelector('input#Cis-ais').setAttribute('type', 'hidden')
            document.querySelector('input#Ces-as').setAttribute('type', 'hidden')
            document.querySelector('input#Fis-dis').setAttribute('type', 'hidden')
            document.querySelector('input#Ges-es').setAttribute('type', 'hidden')
            break;
        case '4':
            document.querySelector('input#Cis-ais').setAttribute('type', 'hidden')
            document.querySelector('input#Ces-as').setAttribute('type', 'hidden')
            document.querySelector('input#Fis-dis').setAttribute('type', 'hidden')
            document.querySelector('input#Ges-es').setAttribute('type', 'hidden')
            document.querySelector('input#H-gis').setAttribute('type', 'hidden')
            document.querySelector('input#Des-b').setAttribute('type', 'hidden')
            break;
        case '3':
            document.querySelector('input#Cis-ais').setAttribute('type', 'hidden')
            document.querySelector('input#Ces-as').setAttribute('type', 'hidden')
            document.querySelector('input#Fis-dis').setAttribute('type', 'hidden')
            document.querySelector('input#Ges-es').setAttribute('type', 'hidden')
            document.querySelector('input#H-gis').setAttribute('type', 'hidden')
            document.querySelector('input#Des-b').setAttribute('type', 'hidden')
            document.querySelector('input#E-cis').setAttribute('type', 'hidden')
            document.querySelector('input#As-f').setAttribute('type', 'hidden')
            break;
        case '2':
            document.querySelector('input#Cis-ais').setAttribute('type', 'hidden')
            document.querySelector('input#Ces-as').setAttribute('type', 'hidden')
            document.querySelector('input#Fis-dis').setAttribute('type', 'hidden')
            document.querySelector('input#Ges-es').setAttribute('type', 'hidden')
            document.querySelector('input#H-gis').setAttribute('type', 'hidden')
            document.querySelector('input#Des-b').setAttribute('type', 'hidden')
            document.querySelector('input#E-cis').setAttribute('type', 'hidden')
            document.querySelector('input#As-f').setAttribute('type', 'hidden')
            document.querySelector('input#A-fis').setAttribute('type', 'hidden')
            document.querySelector('input#Es-c').setAttribute('type', 'hidden')
            break;
        case '1':
            document.querySelector('input#Cis-ais').setAttribute('type', 'hidden')
            document.querySelector('input#Ces-as').setAttribute('type', 'hidden')
            document.querySelector('input#Fis-dis').setAttribute('type', 'hidden')
            document.querySelector('input#Ges-es').setAttribute('type', 'hidden')
            document.querySelector('input#H-gis').setAttribute('type', 'hidden')
            document.querySelector('input#Des-b').setAttribute('type', 'hidden')
            document.querySelector('input#E-cis').setAttribute('type', 'hidden')
            document.querySelector('input#As-f').setAttribute('type', 'hidden')
            document.querySelector('input#A-fis').setAttribute('type', 'hidden')
            document.querySelector('input#Es-c').setAttribute('type', 'hidden')
            document.querySelector('input#D-h').setAttribute('type', 'hidden')
            document.querySelector('input#B-g').setAttribute('type', 'hidden')
            break;
        case '0':
            document.querySelector('input#Cis-ais').setAttribute('type', 'hidden')
            document.querySelector('input#Ces-as').setAttribute('type', 'hidden')
            document.querySelector('input#Fis-dis').setAttribute('type', 'hidden')
            document.querySelector('input#Ges-es').setAttribute('type', 'hidden')
            document.querySelector('input#H-gis').setAttribute('type', 'hidden')
            document.querySelector('input#Des-b').setAttribute('type', 'hidden')
            document.querySelector('input#E-cis').setAttribute('type', 'hidden')
            document.querySelector('input#As-f').setAttribute('type', 'hidden')
            document.querySelector('input#A-fis').setAttribute('type', 'hidden')
            document.querySelector('input#Es-c').setAttribute('type', 'hidden')
            document.querySelector('input#D-h').setAttribute('type', 'hidden')
            document.querySelector('input#B-g').setAttribute('type', 'hidden')
            document.querySelector('input#F-d').setAttribute('type', 'hidden')
            document.querySelector('input#G-e').setAttribute('type', 'hidden')
            break;
}

}

numOfKeysDisabler()

//start
function exerciseStart() {
    btnStart.disabled=true;
    const imageNow = randomImage(gallery)
    score.setAttribute('key', imageNow.key);

switch (xxx === xxx) {
    case "treble":
        score.setAttribute('src', imageNow.srcTreble);
    case "bass":
        score.setAttribute('src', imageNow.srcBass);
    case "grand":
        score.setAttribute('src', imageNow.srcGrand);

}
}

btnStart.addEventListener('click', exerciseStart);

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
    exerciseStart();
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
document.addEventListener('DOMContentLoaded', exerciseStart)


document.querySelector('.keySetter').value
