const goodAnswerCounter = document.querySelector('.goodStats');
const badAnswerCounter = document.querySelector('.badStats');
const btnStart = document.querySelector('.start');
const btnEnd = document.querySelector('.end');
const btnCheck = document.querySelector('.check');
const scoreDiv = document.querySelector('.score');
const score = document.querySelector('.keyExc');
const btnAnswers = document.querySelectorAll("input[name]");
const numberOfKeys = document.querySelector('.keySetter')
const clefSelector = document.querySelector('.clefSetter')


//dodać do local storage zapisana ilosc znakow
//dodac do local storage zapisana forme kluczy
//zapisywać wyniki dobre i zle do local storage - po zakonczeniu zadania reset atrybutow




//filtrowanie buttonów odpowiedzi (po ilości znaków)
if(numberOfKeys.value === '' ) {
    numberOfKeys.value === '7'
    localStorage.setItem('keyNum', numberOfKeys.value)
} else {
    numberOfKeys.value = localStorage.getItem('keyNum')
}


function numOfKeys() {
   let keyNumber = document.querySelector('.keySetter').value
    localStorage.setItem('keyNum', keyNumber)
    return keyNumber
};




//Filtrowanie kluczy
if(clefSelector.value === '' ) {
    clefSelector.value === 'grand'
} else {
    clefSelector.value = localStorage.getItem('clefSet')
}

clefSelector.onchange = function () {

    let modifyClef = clefSelector.value;
    localStorage.setItem('clefSet', modifyClef)
    return modifyClef

}
// clefSelector.value = localStorage.getItem('clefSet')



const submitSettings = function() {
    document.querySelector('.setSignatures').submit();
    document.querySelector('.setClefs').submit();
    numOfKeysDisabler()
    // end()

}


// numberOfKeys.addEventListener('change', numOfKeysDisabler)
function numOfKeysDisabler() {

    switch (numOfKeys()) {
        // case '7':
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
        switch (clefSelector.value) {
            case "treble":
                score.setAttribute('src', imageNow.srcTreble);
                break
            case "bass":
                score.setAttribute('src', imageNow.srcBass);
                break
            case "grand":
                score.setAttribute('src', imageNow.srcGrand);
                break
        }

}

btnStart.addEventListener('click', exerciseStart);

//liczniki

let goodAnswer = localStorage.getItem('goodStats');
if (goodAnswer === null) {
    goodAnswer = 0;
} else {
    goodAnswerCounter.innerText = `${goodAnswer}`
}
function goodCounter() {
    goodAnswer++;
    goodAnswerCounter.innerText = `${goodAnswer}`
    localStorage.setItem('goodStats', goodAnswer)
}

let badAnswer = localStorage.getItem('badStats');
if (badAnswer === null) {
    badAnswer = 0;
} else {
    badAnswerCounter.innerText = `${badAnswer}`
}
function badCounter() {
    badAnswer++;
    badAnswerCounter.innerText = `${badAnswer}`;
    localStorage.setItem('badStats', badAnswer);
}


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
    // event.preventDefault()
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
    localStorage.clear('badStats');
    localStorage.clear('goodStats');
    // exerciseStart()

}



btnEnd.addEventListener('click', end)
document.addEventListener('DOMContentLoaded', exerciseStart)


document.querySelector('.keySetter').value
