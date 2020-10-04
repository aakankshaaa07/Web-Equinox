const id = () => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (var i = 0; i < 15; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const cardNodeParser = (card) => {
  return [
    card.parentElement.children[0].innerHTML,
    parseInt(card.children[1].innerText),
  ];
};

const addItem = ([name, price]) => {
  if (balance.innerHTML < price) {
    balance.style.color = "orangered";
    return;
  } else {
    balance.style.color = "#fefefe";
  }

  changeBalance(price);
  updateCart(name, price);

  return true;
};

const updateCart = (name, price) => {
  // CartItem(name, price, image)

  const index = cartArray.findIndex((item) => item.name === name);

  console.log(index);

  if (index !== -1) {
    // cartArray = cartArray.map((item) => {
    //   return item.name === name ? { ...item, quantity: quantity + 1 } : item;
    // });
    cartArray[index].quantity += 1;

    console.log(cartArray);
  } else {
    cartArray.push({
      name,
      price,
      quantity: 1,
      id: id(),
    });
  }

  cartItems.innerHTML = "";
  cartArray.forEach((item) => {
    cartItems.innerHTML += CartItem(item);
  });
};

const changeBalance = (num, decrease = true) => {
  let i = 0;
  const interval = num > 100 ? (num >= 200 ? 15 : 20) : 25;

  if (easterEggDone) {
    firstRender = false;
  }

  const timer = setInterval(() => {
    if (decrease) {
      balance.innerHTML--;
    } else {
      balance.innerHTML++;
    }
    i++;
    if (i === num) clearInterval(timer);
  }, interval);

  if (!decrease) {
    cartBalance.innerHTML = parseInt(cartBalance.innerHTML) + num;
  } else {
    cartBalance.innerHTML = parseInt(cartBalance.innerHTML) - num;
  }
};

const displayCards = (games) => {
  cardArray.innerHTML = "";

  const fadeIn = firstRender ? true : false;

  games.forEach((game) => {
    cardArray.innerHTML += Card(game, (animation = fadeIn));
  });

  const cardCartButtons = document.querySelectorAll(".fa-cart-plus");

  cardCartButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      const data = cardNodeParser(e.target.parentElement);
      data.push(`bg${index + 1}.jpg`);
      const check = addItem(data);
      if (check) {
        cartNum.innerHTML = parseInt(cartNum.innerHTML) + 1;
      }
    });
  });
};

const searchControlHandler = (e) => {
  search = e.target.value;

  if (search.toLowerCase() === "exodus" && !easterEggDone) {
    firstRender = true;
    easterEggDone = true;
    changeBalance(500, (decrease = false));
    search = "";
    e.target.value = "";
  }

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  displayCards(filteredGames);
};
