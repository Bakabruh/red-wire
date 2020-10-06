const form = document.getElementById('form');
const pseudo = document.getElementById('pseudo');
const email = document.getElementById('mail');
const mdp = document.getElementById('mdp');
const formBtn = document.getElementById('bouton');

window.onload = function loading () {
  form.style.visibility = 'visible';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {

  const pseudoValue = pseudo.value.trim();
  const emailValue = email.value.trim();
  const mdpValue = mdp.value.trim();

  if(!pseudoValue) {
    setErrorFor(pseudo, 'The pseudo area is empty');
  } else {
    setSuccessFor(pseudo);
  }

  if(!emailValue) {
    setErrorFor(email, 'The email area is empty');
  } else {
    setErrorFor(email);
  }

  if(!mdpValue) {
    setErrorFor(mdp, 'The password area is empty');
  } else {
    setSuccessFor(mdp);
  }

}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.style.visibility = 'visible';
  small.innerText = message;

  formControl.className = 'form-control-error';
}

function setSuccessFor(input) {
  formControl = input.parentElement;

  formControl.className = 'form-control-success';
}

formBtn.addEventListener('click', function() {

  if(!pseudoValue && !emailValue && !mdpValue) {
    form.style.visibility = 'hidden';

    let newPseudo = document.createElement('h2');

    let pseudoContent = document.createTextNode(pseudoValue);

  }

});
