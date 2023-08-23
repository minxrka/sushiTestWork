 function toggleCartStatus(){
  const dataEmpty = document.querySelector('[data-cart-empty]');
  const cartWrapper = document.querySelector('.cart-wrapper');
  cartWrapper.children.length;


  const orderForm = document.querySelector('#order-form');



  if(cartWrapper.children.length > 0){
    dataEmpty.classList.add('none');

    orderForm.classList.remove('none');
  } else{
    dataEmpty.classList.remove('none');

    orderForm.classList.add('none');
  }
 }
