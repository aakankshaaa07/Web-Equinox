const Card = ({ name, price, numOfPlayers, image }, animate = true) => {
  const classes = ["games__card"];

  if (!animate) {
    classes.push("no-animation");
  }

  return `<div class="${classes.join(" ")}">
    <span class="games__border"></span>
    <span class="games__border"></span>
    <span class="games__border"></span>
    <span class="games__border"></span>
    <div class="games__card-bg" style="background: #fefefe55 url(./assets/Cards/${image}); background-blend-mode: multiply" ></div>
    <div class="games__card-bottom">
      <div class="games__card-name">${name}</div>
      <div class="games__card-btm">
        <i class="fas fa-user-friends"> <span>${numOfPlayers}</span></i>
        <i class="fab fa-500px"> <span>${price}</span></i>
        <i class="fas fa-cart-plus"></i>
      </div>
    </div>
  </div>`;
};

// const CartItem = ({ name, price, id, quantity }) => {
//   return `<div data-quantity="${quantity} id="${id}" class="cart__item">
//   <div class="cart__item-name">${name}</div>
//   <div class="cart__item-price"> <i class="fab fa-500px"></i> ${price}</div>
// </div>`;
// };

const CartItem = ({ name, price, id, quantity }) => {
  return `<div class="cart__item">
    <div class="cart__item-name">${name}</div>
    <div class="cart__item-price"> <i class="fab fa-500px"></i> ${price}</div>
    <!-- <div class="cart__quantitiy">Quantity: <span>2</span></div> -->
    
    <div class="card__quantity">
    <span class="card__quan-num" style="font-size: 1.5rem;" > Qnt:${quantity}</span>
    </div>
  
</div>`;
};

// background: #21212166 url("../assets/Cards/bg1.jpeg");
{
  /* <div class="cart__quantitiy">Quantity: <span>2</span></div> */
}
