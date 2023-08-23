const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function(event){
  //проверяем что клик был совершон по кнопке "Добавить в корзину"
  if (event.target.hasAttribute('data-cart')){
    //Проверка по кнопку добавить в корзину
   const card =  event.target.closest('.card');
    //Собераем даннные о товаре
   const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.item-title').innerText,
      itemsInBox: card.querySelector('[data-items-in-box]').innerText,
      weight: card.querySelector('.price__weight').innerText,
      price: card.querySelector('.price__currency').innerText,
      counter: card.querySelector('[data-counter').innerText,

    };
    

  //Проверяем если ли одинаковые товары в корзине
  const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
  if(itemInCart){
    const counterElement = itemInCart.querySelector('[data-counter');
    counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
  }
  else {
    //Если товара нет в корзине
    //Собранные данные подставляем в шаблон для товара в корзину
    const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
    <div class="cart-item__top">
    <div class="cart-item__img">
      <img src="${productInfo.imgSrc}" alt="">
    </div>
    <div class="cart-item__desc">
      <div class="cart-item__title">${productInfo.title}</div>
      <div class="cart-item__weight">${productInfo.itemsInBox}/ ${productInfo.weight}</div>

      <!-- cart-item__details -->
      <div class="cart-item__details">

        <div class="items items--small counter-wrapper">
          <div class="items__control" data-action="minus">-</div>
          <div class="items__current" data-counter="">${productInfo.counter}</div>
          <div class="items__control" data-action="plus">+</div>
        </div>

        <div class="price">
          <div class="price__currency">${productInfo.price}</div>
        </div>

      </div>
      <!-- // cart-item__details -->

    </div>
  </div>
  </div>`;
  

  //Отобразить товар в корзине
  cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
    }

    //Сбрасываем счётчик на единицу
    card.querySelector('[data-counter').innerText = "1";

    //Отображение статуса корзины Пустая / полная
    toggleCartStatus();

    //Пересчёт общей стоимости корзины
    calcCartPriceAndDelivery();
  }
});