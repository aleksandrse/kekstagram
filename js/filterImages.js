import {newDateFilter, Data} from './api.js' ;
import {similarFotoObject} from './smallPictures.js';
import {debounce} from './util.js';


const imgFiltersButton = document.querySelectorAll('.img-filters__button');
const imgFiltersButton1 = document.querySelector('#filter-default');
const imgFiltersButton2 = document.querySelector('#filter-random');
const imgFiltersButton3 = document.querySelector('#filter-discussed');


// двигал кнопку
imgFiltersButton1.addEventListener("click", ()=>{

imgFiltersButton1.style.position = "relative";
let value = 0;
console.log(value);
let timer = setInterval(()=>{
  value += 1;
  imgFiltersButton1.style.left = value +"px";
  if ( value > 400 ) clearInterval(timer);
},10)

}
);

//функция трех фильтров (фото отсортированное по лайкам, начальное состояние и рандомный вывод )
const getFilter = (newDate) =>{
if (imgFiltersButton3.classList.contains('img-filters__button--active')) {
  return  newDate.sort((a,b)=> b.likes - a.likes);
}
if (imgFiltersButton1.classList.contains('img-filters__button--active')) {
    return  Data
}
if (imgFiltersButton2.classList.contains('img-filters__button--active')) {
    const newDate10 =   newDate.sort((a,b)=>0.5 - Math.random());
    return newDate10.slice(0,100)
}
}

//  добавление класса на кнопку активного фильтра
imgFiltersButton.forEach((filterButtom)=>{

    filterButtom.addEventListener('click', ()=>{

        imgFiltersButton.forEach( (b)=>{
            b.classList.remove('img-filters__button--active');
        })
        filterButtom.classList.add('img-filters__button--active');
        //similarFotoObject(getFilter(newDateFilter));
        myDebouse();

    });

})

 const myDebouse = debounce(()=>similarFotoObject(getFilter(newDateFilter)),1000);


