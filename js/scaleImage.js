const image = document.querySelector('.img-upload__preview img');
const scaleInput = document.querySelector('.scale__control--value');
let DEFAULT_SCALE = 100;
scaleInput.value = DEFAULT_SCALE;

const scaleImge = (value = DEFAULT_SCALE)=>{
    image.style.transform = `scale(${value / 100})`;
    scaleInput.value = `${value}%`;
}

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');


const onSmallerButtonClick = () => {
    const currentValue = parseInt(scaleInput.value, 10); 
    let newValue = currentValue - SCALE_STEP;
    if(newValue < MIN_SCALE ){
        newValue = MIN_SCALE
    }
    scaleImge(newValue)
  };
  
  const onBiggerButtonClick = () => {
    const currentValue = parseInt(scaleInput.value, 10);   
    let newValue = currentValue + SCALE_STEP;
    if(newValue > MAX_SCALE ){
        newValue = MAX_SCALE
       }
    scaleImge(newValue)
  };
  
  scaleControlSmaller.addEventListener('click', onSmallerButtonClick);
  scaleControlBigger.addEventListener('click', onBiggerButtonClick);
  
  const battonClose = document.querySelector('.img-upload__cancel');
  battonClose.addEventListener('click',function(){
    DEFAULT_SCALE = 100;
    scaleImge(DEFAULT_SCALE);
} )

const resetScale = () => {
  scaleImge(DEFAULT_SCALE);
}

export {resetScale}