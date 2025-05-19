


import {bigPicture} from './smallPictures.js';
import {commentsAll} from './smallPictures.js';

//закрытие большого окна

const body = document.querySelector('body');

let closeModalWindov = function(){
    const bigPictureCancel = document.querySelector('.big-picture__cancel');

bigPictureCancel.addEventListener('click', function(){
   bigPicture.classList.add('hidden');
    body.classList.remove ('modal-open');
    commentsShown = 0;
})

document.addEventListener('keydown', function(evt){
   if(evt.keyCode===27){
      bigPicture.classList.add('hidden');
      body.classList.remove ('modal-open');
      commentsShown = 0;
   }
})
}

export {closeModalWindov}

// показ  коментариев 
const battonLoder = document.querySelector('.comments-loader');
const commentCount = document.querySelector('.social__comment-count');
const COMMENTS_PER_PORTION = 5;
let commentsShown = 0;

const getMessage = function(){
const socialcommentsList = document.querySelector('.social__comments');
socialcommentsList.innerHTML = '';


//ограничить кол-во коментариев и загружать дополнительные по клику


commentsShown += COMMENTS_PER_PORTION
if (commentsShown >= commentsAll.length){
   commentsShown = commentsAll.length;
   battonLoder.classList.add('hidden')
} else {
   battonLoder.classList.remove('hidden')
}

for(let i=0; i<commentsShown; i++){
   
   const NewComment = document.createElement('li');
   NewComment.classList.add('social__comment');
   NewComment.innerHTML = `
   <img
       class="social__picture"
       src="${commentsAll[i].avatar}"
       alt="${commentsAll[i].name}"
       width="35" height="35">
   <p class="social__text">${commentsAll[i].message}</p>
`;

   socialcommentsList.appendChild(NewComment);
   commentCount.innerHTML = `${commentsShown} из <span class="comments-count">${commentsAll.length}</span> комментариев`
};
}

battonLoder.addEventListener('click', function(){
   getMessage();
})
export {getMessage}