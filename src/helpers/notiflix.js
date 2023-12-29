import Notiflix from 'notiflix';

Notiflix.Notify.init({
  position: 'center-top',
  width: '450px',
  fontSize: '20px',
  timeout: 3000,
  success: {
    background: '#9ae3a9',
    textColor: '#fff',
  },
  failure: {
    background: '#ff636b',
    textColor: '#fff',
  },
});

function succesMessage() {
  return Notiflix.Notify.success('Contact was added');
}

function succesRegistrationMessage() {
  return Notiflix.Notify.success('Registration Success');
}

function failedRegistrationMessage() {
  return Notiflix.Notify.failure('Registration Failed or User already Exist');
}

function failedLogin() {
  return Notiflix.Notify.failure('Name or password is not correct.');
}

function nameCheckerError() {
  return Notiflix.Notify.failure('Contact already exists');
}

export {
  succesMessage,
  nameCheckerError,
  succesRegistrationMessage,
  failedRegistrationMessage,
  failedLogin,
};
