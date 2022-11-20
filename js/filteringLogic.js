const numberOfKeys = document.querySelector('.keySetter');
const clefSelector = document.querySelector('.clefSetter');
const submit = document.querySelector('.submitter');

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
    numOfKeysOnDomLoad()
    clefsOnDomLoad()
}

loadDomSettings()

//Zczytanie l. znakow do zapisu ustawień
function setNumOfKeys() {
    const keySignatureSetter = numberOfKeys.value
    localStorage.setItem('keyNum', keySignatureSetter)
    return keySignatureSetter
}
function setClef() {
    const clefSetter = clefSelector.value
    localStorage.setItem('clefSet', clefSetter)
    return clefSetter
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
