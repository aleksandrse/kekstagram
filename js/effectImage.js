


const effectsRadios = document.querySelectorAll('.effects__radio');
const imguUploadPreview = document.querySelector('.img-upload__preview img');
const effectLevelValue = document.querySelector('.effect-level__value');
const sliderElement = document.querySelector('.effect-level__slider');

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];


let defaultEffect = EFFECTS[0];
let chosenEffect = defaultEffect;
noUiSlider.create(sliderElement, {
  range:{
    min:defaultEffect.min,
    max:defaultEffect.max,
  },
  start:defaultEffect.max,
  step: defaultEffect.step,
  connect: 'lower',
})
sliderElement.classList.add('hidden');

const getSliderValue = () => {
const sliderValue = sliderElement.noUiSlider.get();
imguUploadPreview.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
effectLevelValue.value = sliderValue;
}
sliderElement.noUiSlider.on('update', getSliderValue);



for (let  effectsRadio of effectsRadios){

  effectsRadio.addEventListener('change', function(){

    imguUploadPreview.className = '';
    imguUploadPreview.style.filter = 'none';
     effectLevelValue.value = '';
   if(effectsRadio.checked){
     let effect = 'effects__preview--' +  effectsRadio.value;
     imguUploadPreview.classList.add( effect);
   }

   chosenEffect = EFFECTS.find((element) => element.name === effectsRadio.value) ;
   updateSlider()
   })
}

const updateSlider = ()=>{
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
     range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  })
  if (chosenEffect === defaultEffect) {
    sliderElement.classList.add('hidden');
   }
}

const resetEffect = () => {
  imguUploadPreview.className = '';
    imguUploadPreview.style.filter = 'none';
     effectLevelValue.value = '';
  chosenEffect = EFFECTS[0];
  sliderElement.classList.add('hidden');
}
const battonClose = document.querySelector('.img-upload__cancel');
battonClose.addEventListener('click',function(){
  resetEffect();
} )

export {resetEffect}
