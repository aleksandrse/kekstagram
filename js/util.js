



/*

const getRandomPositiveInteger = (a, b) => {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  };
  
  const IndexElement = (elements)=> {
   return elements[getRandomPositiveInteger(1, elements.length-1)];
  }
  export {IndexElement,  getRandomPositiveInteger};

  const checkStringLength = (string, length) => string.length <= length; //потом пригодиться;

  // рандомная сортировка массива
  var as = ["max","jack","sam"]; 
  var s = as.sort((a,b) =>{
    return 0.5 - Math.random();
  });

console.log(s);
*/

function debounce (callback, timeoutDelay ) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

export{debounce}