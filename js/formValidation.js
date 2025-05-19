import {showErrorMessage, showSuccessMessage} from './message.js'
import {resetEffect} from './effectImage.js'
import {resetScale} from './scaleImage.js';
const fileField = document.querySelector('#upload-file'); // поле загрузки изображения
const closeButton = document.querySelector('.img-upload__cancel');
const submitButton = document.querySelector('.img-upload__submit');
const imgUploadPreview = document.querySelector('.img-upload__preview img'); // предворительный просмотр изображения


const blockSubmitButton = function(){
    submitButton.disabled = true;
    submitButton.textContent = 'Отправляю...';
}

const unblockSubmitButton = function(){
    submitButton.disabled = false;
    submitButton.textContent = 'Опубликовать';
}

const getCloseEsc =  function(evt){
    if(evt.keyCode===27){
        getCloseFile()
    }
};

// ф-я показывает окно для редактирования
const getUploadFile = function(){
    document.querySelector('.img-upload__overlay').classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open'); 
    document.addEventListener('keydown',getCloseEsc);
    
};

// открытие выбранной фотографии для редактирования
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

fileField.addEventListener('change', function(){
    getUploadFile();
    const file = fileField.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it)=>{
        return fileName.endsWith(it)
    })
    if (matches){
        imgUploadPreview.src = URL.createObjectURL(file);
    }
});

const getCloseFile = function(){
    document.querySelector('.img-upload__overlay').classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown',getCloseEsc);
    document.querySelector('.img-upload__form').reset(); // чистим форму
};

closeButton.addEventListener('click', function(){
    getCloseFile()
});


const form = document.querySelector('#upload-select-image');

const pristine = new Pristine(form, {
    classTo: 'img-upload__element',
    errorTextParent: 'img-upload__element',
    errorTextClass: 'img-upload__error',
  });

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    const isValid = pristine.validate();
    
    if(isValid){
        blockSubmitButton();
        const formData = new FormData(evt.target);
        
        //const valuesFormData = Object.fromEntries(formData.entries());//проверяем что отправили
         fetch (
            'https://25.javascript.htmlacademy.pro/kekstagram' ,
        {
          method: 'POST',
          body: formData,
        },
        )
        .then((response) => {
            if (response.ok){
                getCloseFile();
                resetEffect();
                resetScale();
                showSuccessMessage();
                unblockSubmitButton();
            } else {
                getCloseFile();
                resetEffect();
                resetScale();
                showErrorMessage();
                unblockSubmitButton();
            }
          });   
    } else 
    {
        console.log('нет валидации') 
    }
   
})

