const numberOfKeys = document.querySelector('.keySetter');
const clefSelector = document.querySelector('.clefSetter');
const submit = document.querySelector('.submitter');
const btnCheck = document.querySelector('.check');
const btnEnd = document.querySelector('.end');


//ładowanie ustawień zapisanych w localStorage
function numOfKeysOnDomLoad() {
    const keyNumber = localStorage.getItem('keyNum');
    if (keyNumber === null) {
        localStorage.setItem('keyNum', '7');
    }
    numOfKeysDisabler()
    return keyNumber;
}
function clefsOnDomLoad() {
    const clefNumber = localStorage.getItem('clefSet');
    if (clefNumber === null) {
        localStorage.setItem('clefSet', 'grand');
    }
    return clefNumber;
}




function loadDomSettings() {
    counterReset()
    numOfKeysOnDomLoad()
    clefsOnDomLoad()
    btnCheck.disabled = true;
    btnEnd.disabled = true;
    formSavedSettings('keySignature', localStorage.getItem('keyNum'))
    formSavedSettings('clef', localStorage.getItem('clefSet'))
}

loadDomSettings()

function counterReset() {
    goodAnswer = 0;
    goodAnswerCounter.innerText = `${goodAnswer}`;
    badAnswer = 0;
    badAnswerCounter.innerText = `${badAnswer}`;
    localStorage.removeItem('badStats');
    localStorage.removeItem('goodStats');
}
//Zczytanie l. znakow do zapisu ustawień

function formSavedSettings(id, value) {
        let element = document.getElementById(id);
        element.value = value;
    }


function setNumOfKeys() {
    const keySignatureSetter = numberOfKeys.value;
    localStorage.setItem('keyNum', keySignatureSetter);
    formSavedSettings('keySignature', localStorage.getItem('keyNum'));
    return keySignatureSetter
}
function setClef() {
    const clefSeter = clefSelector.value;
    localStorage.setItem('clefSet', clefSeter);
    formSavedSettings('clef', localStorage.getItem('clefSet'));
    return clefSeter
}

function numOfKeysDisabler() {
    switch (localStorage.getItem('keyNum')) {
        // case '7':
        case '6':
            document.querySelector('input#Cis-ais').setAttribute('type', 'hidden');
            document.querySelector('input#Ces-as').setAttribute('type', 'hidden');
            gallery.splice(13);
            break;

        case '5':
            document.querySelector('input#Cis-ais').setAttribute('type', 'hidden');
            document.querySelector('input#Ces-as').setAttribute('type', 'hidden');
            document.querySelector('input#Fis-dis').setAttribute('type', 'hidden');
            document.querySelector('input#Ges-es').setAttribute('type', 'hidden');
            gallery.splice(11);
            break;
        case '4':
            document.querySelector('input#Cis-ais').setAttribute('type', 'hidden');
            document.querySelector('input#Ces-as').setAttribute('type', 'hidden');
            document.querySelector('input#Fis-dis').setAttribute('type', 'hidden');
            document.querySelector('input#Ges-es').setAttribute('type', 'hidden');
            document.querySelector('input#H-gis').setAttribute('type', 'hidden');
            document.querySelector('input#Des-b').setAttribute('type', 'hidden');
            gallery.splice(9);
            break;
        case '3':
            document.querySelector('input#Cis-ais').setAttribute('type', 'hidden');
            document.querySelector('input#Ces-as').setAttribute('type', 'hidden');
            document.querySelector('input#Fis-dis').setAttribute('type', 'hidden');
            document.querySelector('input#Ges-es').setAttribute('type', 'hidden');
            document.querySelector('input#H-gis').setAttribute('type', 'hidden');
            document.querySelector('input#Des-b').setAttribute('type', 'hidden');
            document.querySelector('input#E-cis').setAttribute('type', 'hidden');
            document.querySelector('input#As-f').setAttribute('type', 'hidden');
            gallery.splice(7);
            break;
        case '2':
            document.querySelector('input#Cis-ais').setAttribute('type', 'hidden');
            document.querySelector('input#Ces-as').setAttribute('type', 'hidden');
            document.querySelector('input#Fis-dis').setAttribute('type', 'hidden');
            document.querySelector('input#Ges-es').setAttribute('type', 'hidden');
            document.querySelector('input#H-gis').setAttribute('type', 'hidden');
            document.querySelector('input#Des-b').setAttribute('type', 'hidden');
            document.querySelector('input#E-cis').setAttribute('type', 'hidden');
            document.querySelector('input#As-f').setAttribute('type', 'hidden');
            document.querySelector('input#A-fis').setAttribute('type', 'hidden');
            document.querySelector('input#Es-c').setAttribute('type', 'hidden');
            gallery.splice(5);
            break;
        case '1':
            document.querySelector('input#Cis-ais').setAttribute('type', 'hidden');
            document.querySelector('input#Ces-as').setAttribute('type', 'hidden');
            document.querySelector('input#Fis-dis').setAttribute('type', 'hidden');
            document.querySelector('input#Ges-es').setAttribute('type', 'hidden');
            document.querySelector('input#H-gis').setAttribute('type', 'hidden');
            document.querySelector('input#Des-b').setAttribute('type', 'hidden');
            document.querySelector('input#E-cis').setAttribute('type', 'hidden');
            document.querySelector('input#As-f').setAttribute('type', 'hidden');
            document.querySelector('input#A-fis').setAttribute('type', 'hidden');
            document.querySelector('input#Es-c').setAttribute('type', 'hidden');
            document.querySelector('input#D-h').setAttribute('type', 'hidden');
            document.querySelector('input#B-g').setAttribute('type', 'hidden');
            gallery.splice(3);
            break;
        case '0':
            document.querySelector('input#Cis-ais').setAttribute('type', 'hidden');
            document.querySelector('input#Ces-as').setAttribute('type', 'hidden');
            document.querySelector('input#Fis-dis').setAttribute('type', 'hidden');
            document.querySelector('input#Ges-es').setAttribute('type', 'hidden');
            document.querySelector('input#H-gis').setAttribute('type', 'hidden');
            document.querySelector('input#Des-b').setAttribute('type', 'hidden');
            document.querySelector('input#E-cis').setAttribute('type', 'hidden');
            document.querySelector('input#As-f').setAttribute('type', 'hidden');
            document.querySelector('input#A-fis').setAttribute('type', 'hidden');
            document.querySelector('input#Es-c').setAttribute('type', 'hidden');
            document.querySelector('input#D-h').setAttribute('type', 'hidden');
            document.querySelector('input#B-g').setAttribute('type', 'hidden');
            document.querySelector('input#F-d').setAttribute('type', 'hidden');
            document.querySelector('input#G-e').setAttribute('type', 'hidden');
            gallery.splice(1);
            break;
    }
}



function submitSettings() {
    end()
    setNumOfKeys()
    numOfKeysDisabler()
    setClef()
    location.reload()


}

submit.addEventListener('click', submitSettings)
