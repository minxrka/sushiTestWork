//Прослушка на всем окне

window.addEventListener('click', function (event){
  //Проверка элемента на параметр plus
  if (event.target.dataset.action === 'plus'){

    //Находим обертку счетчика
    const counterWrapper = event.target.closest('.counter-wrapper');
    //Находим сам div с счетчиком
    const counter = counterWrapper.querySelector('[data-counter]');
    //Увеличиваем ++
    counter.innerText = ++counter.innerText;
    

    if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
      //Пересчёт общей стоимости корзины
      calcCartPriceAndDelivery();
    }
  }

  //Проверка элемента на параметр minus
  if (event.target.dataset.action === 'minus'){


    
    const counterWrapper = event.target.closest('.counter-wrapper');

    const counter = counterWrapper.querySelector('[data-counter]');
    
    //Проверка счетчика чтобы был больше чем 1
  if (parseInt(counter.innerText) > 1){
    //Изменение счетчика в -1
    counter.innerText = --counter.innerText;
    //Проверка на товар который находится в корзине
    } else if (event.target.closest('.cart-wrapper') && parseInt (counter.innerText) === 1) {
      //Удаляем товар из корзины
      event.target.closest('.cart-item').remove();

      //Отображение статуса корзины Пустая / полная
      toggleCartStatus();

      //Пересчёт общей стоимости корзины
      calcCartPriceAndDelivery();
    }

    //Проверяем клик на + или - в корзине

    if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
      //Пересчёт общей стоимости корзины
      calcCartPriceAndDelivery();
    }
  }
});