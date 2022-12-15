const btnStart = document.querySelector('.start');

const score = document.querySelector('.keyExc');
const btnAnswers = document.querySelectorAll('input[name]');

function newExerciseStart() {
    btnStart.disabled = true;
   btnCheck.disabled = false;
   btnEnd.disabled = false
    const imageNow = randomImage(gallery);


    switch (localStorage.getItem('clefSet')) {
        case 'treble':
            score.setAttribute('src', imageNow.srcTreble);
            break;
        case 'bass':
            score.setAttribute('src', imageNow.srcBass);
            break;
        case 'grand':
            score.setAttribute('src', imageNow.srcGrand);
    }


    score.setAttribute('key', imageNow.key);
    score.setAttribute('odp', imageNow.odp);
}
btnStart.addEventListener('click', newExerciseStart);

// PĘTLA WYCIĄGAJĄCA WARTOŚĆ Z LISTY INPUTÓW
let odp = '';
btnAnswers.forEach((button) => {
    button.addEventListener('click', (event) => {
        odp = button;
    });
});

// SPRAWDZANIE ODPOWIEDZI
const ansUnchecker = function () {
    btnAnswers.forEach((button) => {
        button.checked = false;
        button.classList.remove('goodAns')
        button.classList.remove('badAns')
        button.classList.remove('goodBadAns')
        button.removeAttribute('disabled')
    });
};

const btnDisabler = function () {
    btnAnswers.forEach((button) => {
        button.setAttribute('disabled', true)

    });
};


function colorBadAnswers() {
    odp.classList.add('badAns')
}

function colorGood() {
    document.getElementById(score.attributes.key.value).classList.add('goodBadAns')
}


// fukcja jeśli dobrze
const checkAnswer = function (event) {
    colorGood()
    btnCheck.disabled = false;
    btnDisabler()

    if (score.getAttribute('key') === odp.id) {
        goodCounter()
        // alert('Dobra odpowiedź. Tak trzymajd!')


    } else {
        badCounter();
        colorBadAnswers()

        // alert(`Błędna odpowiedź.\n\rPrawidłowa odpowiedź to ${score.getAttribute('odp')}`);

    }

    setTimeout(() => {
        ansUnchecker();
        newExerciseStart();
    }, 4000)



};
btnCheck.addEventListener('click', checkAnswer);


const end = function () {
// eslint-disable-next-line no-mixed-operators
  const percent = goodAnswer / (goodAnswer + badAnswer) * 100;
  alert(`Wynik to: ${goodAnswer} dobrych odpowiedzi. Twoja Skuteczność to ${percent.toFixed(0)}%`);
  btnStart.disabled = false;
    btnEnd.disabled = true;
    btnCheck.disabled = true;
  score.setAttribute('src', '');
  counterReset()

};
btnEnd.addEventListener('click', end);
