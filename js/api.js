import {similarFotoObject} from './smallPictures.js'



// ф-я вывода ошибки при получении данных с сервера
const badMistake = document.querySelector('.badMistake');
let Mistake = (DataError)=>{
  badMistake.textContent = DataError;
  badMistake.classList.remove('visually-hidden');
}
const imgFilters =  document.querySelector('.img-filters');// фильтры (по умолчанию, случайные, обсуждаемые) 

 const newDateFilter = [];// данные с сервера , которые будут изменяться фильтрами
 const Data =[] // данные с сервера , которые не будут меняться

fetch('https://25.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response;
    }

    //throw new Error(`${response.status} — ${response.statusText}`);
    //throw new Error('Не удалось загрузить фотографии');
    throw new Error(`${response.status} — ${'Не удалось загрузить фотографии'}`);
  })
  .then((response) => response.json())
  .then((date) => {
    //console.log(date);
    const newDate =date.slice(0,25);
    newDate.map((element)=>{
      Data.push(element);
    })
    newDate.map((element)=>{
      newDateFilter.push(element);
    })
     
    similarFotoObject(newDateFilter);
    imgFilters.classList.remove('img-filters--inactive');
  }
  )
  .catch((error) =>  {
    Mistake(error);
  }
  );

export {newDateFilter,Data}