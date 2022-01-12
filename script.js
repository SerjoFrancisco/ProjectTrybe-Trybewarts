const logIn = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('senha');
const submitBtn = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

function signIn() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function ableButton() {
  if (checkbox.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
logIn.addEventListener('click', signIn);
checkbox.addEventListener('change', ableButton);
