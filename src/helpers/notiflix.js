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

function nameCheckerError() {
  return Notiflix.Notify.failure('Contact already exists');
}

export { succesMessage, nameCheckerError };
