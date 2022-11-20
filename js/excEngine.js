const btnStart = document.querySelector('.start');
const btnEnd = document.querySelector('.end');
const btnCheck = document.querySelector('.check');
const score = document.querySelector('.keyExc');
const btnAnswers = document.querySelectorAll('input[name]');


function newExerciseStart() {
    btnStart.disabled = true;
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
    });
};

const checkAnswer = function (event) {
    if (score.getAttribute('key') === odp.id) {
        goodCounter();
        alert('Dobra odpowiedź'); // dodac zmianę kolorów
    } else {
        badCounter();
        alert(`Błędna odpowiedź.\n\r Prawidłowa odpowiedź to ${score.getAttribute('odp')}`);
    }
    ansUnchecker();
    newExerciseStart();
};
btnCheck.addEventListener('click', checkAnswer);


const end = function () {
// eslint-disable-next-line no-mixed-operators
  const percent = goodAnswer / (goodAnswer + badAnswer) * 100;
  alert(`Wynik to: ${goodAnswer} dobrych odpowiedzi. Twoja Skuteczność to ${percent.toFixed(0)}%`);
  btnStart.disabled = false;
  score.setAttribute('src', '');
  counterReset()
};
btnEnd.addEventListener('click', end);
