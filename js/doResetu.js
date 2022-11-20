




function loadKeys() {
  if (localStorage.getItem('keyNum') === null) {
    numberOfKeys.value = '7';
    localStorage.setItem('keyNum', numberOfKeys.value);
  } else {
    numberOfKeys.value = localStorage.getItem('keyNum');
  }
}

function loadClefs() {
  if (localStorage.getItem('clefSet') === null) {
    clefSelector.value = 'grand';
    localStorage.setItem('clefSet', clefSelector.value);
  } else {
    clefSelector.value = localStorage.getItem('keyNum');
  }
}
// document.addEventListener('DOMContentLoaded', loadKeys)
// document.addEventListener('DOMContentLoaded', loadClefs)

// document.querySelector('body').addEventListener('DOMContentLoaded', function() {
//     loadClefs()
//     loadKeys()
//     newExerciseStart()
// })



function clefChangerer() {
  const modifyClef = clefSelector.value;

  clefSelector.addEventListener('change', () => {
    localStorage.setItem('clefSet', clefSelector.value);
  });
  return modifyClef;
}



// START


// LICZNIKI
