import {closeModalWindov} from './fullPictures.js'
//import {createFotoObject } from './date.js'; // данные получаем теперь с сервера
import {getMessage} from './fullPictures.js'

const bigPicture = document.querySelector('.big-picture');
const similarFotoTemplate = document.querySelector ('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const similarFotoFragment = document.createDocumentFragment();
//const similarFotoObject = createFotoObject(); // данных не было с  сервера
let commentsAll = [];

// добавление маленьких фотографий
const similarFotoObject = (dataServer) =>{
dataServer.forEach(element => {
   pictures.querySelectorAll('.picture').forEach((element) => element.remove()); // перед каждым вызовом функции отрисовки фотографий , удаляем предыдущии фотографии 
   const fotoElement = similarFotoTemplate.cloneNode(true);
   fotoElement.querySelector('.picture__img').src = element.url;
   fotoElement.querySelector('.picture__comments').textContent =  element.comments.length;
   fotoElement.querySelector('.picture__likes').textContent = element.likes;
   similarFotoFragment.appendChild(fotoElement);

// открытие маленькой фотографии в большое окно по клику
const srcBigPicture = document.querySelector('.big-picture__img');
const ImgBigPicture =  srcBigPicture.querySelector('img') ;
const lickesBigPicture = document.querySelector('.likes-count');
const commentsBigPicture = document.querySelector('.comments-count');
const socialCommentsItem = document.querySelector('.social__comment');
//const socialComments = socialCommentsItem.querySelector('.social__picture');
const socilalCaption = document.querySelector('.social__caption');
const body = document.querySelector('body');


fotoElement.addEventListener('click', function(){
   commentsAll = element.comments;
   ImgBigPicture.src = element.url;
   lickesBigPicture.textContent = element.likes;
   commentsBigPicture.textContent = element.comments.length;
   bigPicture.classList.remove('hidden');
   socilalCaption.textContent =  element.description;
   // перестает работать прокрутка за модальным окном
   body.classList.add ('modal-open');

    getMessage()     // комментарии
 });

 // ф-я закрытия большого окна 
 closeModalWindov();
 
});


pictures.appendChild(similarFotoFragment);
}
export {bigPicture};
export {commentsAll};
export {similarFotoObject};
