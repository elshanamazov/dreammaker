(function () {
  const form = document.querySelector('.js-form');
  const val_password = new RegExp(/^[0-9a-zA-Z]{4,12}$/);

  let inputName = document.querySelector('.js-name');
  let inputPassword = document.querySelector('.js-password');
  let formInputs = document.querySelectorAll('.js-input');
  let validateFormDom = [...document.querySelectorAll('.form__validate')];

  const handleForm = (event) => {
    event.preventDefault();
    validateForm();
  };

  function validateForm() {
    const inputNameVal = inputName.value.toLowerCase();

    formInputs.forEach((input) => {
      if (input.value === '') {
        input.classList.add('_error');
      } else {
        input.classList.remove('_error');
      }
    });

    if (inputNameVal.length < 4) {
      inputName.classList.add('_error');
      validateFormDom[0].classList.add('_show');
    } else {
      inputName.classList.remove('_error');
      validateFormDom[0].classList.remove('_show');
    }

    if (!val_password.test(inputPassword.value)) {
      inputPassword.classList.add('_error');
      validateFormDom[1].classList.add('_show');
    } else {
      inputPassword.classList.remove('_error');
      validateFormDom[1].classList.remove('_show');
    }
  }

  form.addEventListener('submit', handleForm);
})();
