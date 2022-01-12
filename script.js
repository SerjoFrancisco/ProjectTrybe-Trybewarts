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
const counter = document.getElementById('counter');

function signIn() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function ableButton() {
  if (checkbox.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
function countCharacters() {
  counter.innerText = 500 - observations.value.length;
}
function getFamily() {
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked) {
      window.localStorage.setItem('Família', family[i].value);
    }
  }
}
function getRate() {
  for (let i = 0; i < rating.length; i += 1) {
    if (rating[i].checkedx) {
      window.localStorage.setItem('Avaliação', rating[i].value);
    }
  }
}
function getCourses() {
  let itens = '';
  for (let i = 0; i < course.length; i += 1) {
    if (course[i].checked) {
      itens += `${course[i].value}, `;
      course[i].classList.add('subject');
    }
  }
  const cursos = itens.substring(0, itens.length - 2);
  window.localStorage.setItem('Matérias', cursos);
}
function returnForm() {
  form.innerText = `Nome: ${localStorage.getItem('Nome')}
  Email: ${localStorage.getItem('Email')}
  Casa: ${localStorage.getItem('Casa')}
  Família: ${localStorage.getItem('Família')}
  Matérias: ${localStorage.getItem('Matérias')}
  Avaliação: ${localStorage.getItem('Avaliação')}
  Observações: ${localStorage.getItem('Observações')}`;
}
function makeForm() {
  window.localStorage.setItem('Nome', `${firstname.value} ${lastname.value}`);
  window.localStorage.setItem('Email', emailInput.value);
  window.localStorage.setItem('Casa', house.value);
  getFamily();
  getCourses();
  getRate();
  window.localStorage.setItem('Observações', observations.value);
  form.innerText = `Nome: ${localStorage.getItem('Nome')}`;
  returnForm();
}
observations.addEventListener('input', countCharacters);
submitBtn.addEventListener('click', makeForm);
logIn.addEventListener('click', signIn);
checkbox.addEventListener('change', ableButton);
