const logIn = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('senha');
const submitBtn = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
const rating = document.getElementsByName('rate');
const course = document.getElementsByName('course');
const firstname = document.getElementById('input-name');
const lastname = document.getElementById('input-lastname');
const emailInput = document.getElementById('input-email');
const house = document.getElementById('house');
const family = document.getElementsByName('family');
const observations = document.getElementById('textarea');
const form = document.getElementById('evaluation-form');

const myForm = {};
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
function getFamily() {
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked === true) {
      window.localStorage.setItem('Família', rating[i].value);
    }
  }
}
function getRate() {
  for (let i = 0; i < rating.length; i += 1) {
    if (rating[i].checked === true) {
      window.localStorage.setItem('Avaliação', rating[i].value);
    }
  }
}
function getCourses() {
  const array = [];
  for (let i = 0; i < course.length; i += 1) {
    if (course[i].checked === true) {
      array.push(course[i].value);
    }
  }
  window.localStorage.setItem('Matérias', JSON.stringify(array));
}
function makeForm() {
  // window.localStorage.setItem('Nome', `${firstname.value} ${lastname.value}`);
  // window.localStorage.setItem('Email', emailInput.value);
  // window.localStorage.setItem('Casa', house.value);
  // getFamily();
  // getCourses();
  // getRate();
  // window.localStorage.setItem('Observações', observations.value);
  // form.innerText = `Nome: ${localStorage.getItem('Nome')}`;
  returnForm();
}
function returnForm() {
  let materias = localStorage.getItem('Matérias');
  form.innerText = `Nome: ${localStorage.getItem('Nome')}\n` + `Email:${localStorage.getItem('Email')}\n` + `Casa:${localStorage.getItem('Casa')}\n` + `Família:${localStorage.getItem('Família')}\n` + `Matérias:${materias}\n` + `Avaliação${localStorage.getItem('Avaliação')}\n` + `Observações:${localStorage.getItem('Observações')}`;
}
submitBtn.addEventListener('click', makeForm);
logIn.addEventListener('click', signIn);
checkbox.addEventListener('change', ableButton);
