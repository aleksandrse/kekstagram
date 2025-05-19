const body = document.querySelector('body');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const  successMessage = document.querySelector('#success').content.querySelector('.success');

const showErrorMessage = () => {
    body.append(errorMessage);
    closeButtonMesage.addEventListener('click', hideMessage);
    body.addEventListener('keydown', onEscDown);

}

const showSuccessMessage = () => {
    body.append(successMessage);
    body.addEventListener('keydown', onEscDown);
    body.addEventListener('click',onBodyClick);
    successButton.addEventListener('click', hideMessage)
}

const closeButtonMesage = errorMessage.querySelector('.error__button');
const successButton = successMessage.querySelector('.success__button');

function onEscDown (evt){
    if(evt.key === 'Escape'){
        evt.preventDefault()
        hideMessage()
    }
}

function onBodyClick (evt){
    if (
        evt.target.closest('.success__inner') ||
        evt.target.closest('.error__inner')
      ) {
        return;
      }
      hideMessage();
    }


function hideMessage () {
    const messageElement =
    document.querySelector('.success') || document.querySelector('.error');
     messageElement.remove();
     body.removeEventListener('keydown', onEscDown);
     body.removeEventListener('click', onBodyClick);
}

export {showErrorMessage, showSuccessMessage}