const logIn = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('senha');

function signIn() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
logIn.addEventListener('click', signIn);
