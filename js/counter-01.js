//Объявление переменны на страницы минус/плюс
const btnMinus = document.querySelector('[data-action = "minus"]');
const btnPlus = document.querySelector('[data-action = "plus"]');
//Клик на кнопке
const counter = document.querySelector('[data-counter]')
//Клик по кнопке минус
btnMinus.addEventListener('click', function(){
  //Проверка счетчика чтобы был больше чем 1
  if (parseInt(counter.innerText) > 1){
    //Изменение счетчика в -1
    counter.innerText = --counter.innerText;
  }
  
});
//Клик по кнопке плюс
btnPlus.addEventListener('click', function(){
  counter.innerText = ++counter.innerText;
});


