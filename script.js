const logIn = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('senha');
const submitBtn = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
const rating = document.getElementsByName('rate');

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
function getRateValue (){
  for (let i = 0; i < rating.length; i += 1) {
   if(rating[i].checked === true){
     console.log(rating[i].value);
   }
  }
}

submitBtn.addEventListener('click', sendForm);
logIn.addEventListener('click', signIn);
checkbox.addEventListener('change', ableButton);
