displayCards(games);

searchBar.addEventListener("keyup", searchControlHandler);

searchBar.addEventListener("click", () => (firstRender = false));

document.addEventListener("click", () => {
  searchBar = document.getElementById("search-bar2");
  console.log("ewd");

  console.log(decrementButtons);
});

cartIcon.addEventListener("click", () => {
  incrementButtons = document.querySelectorAll(".quan-inc");
  decrementButtons = document.querySelectorAll(".quan-dec");
  console.log(incrementButtons);
});

incrementButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    e.target.parentElement.children[1].innerHTML =
      parseInt(e.target.parentElement.children[1].innerHTML) + 1;

    let change = parseInt(
      e.target.parentElement.parentElement.children[2].children[1].innerHTML
    );

    console.log(change);

    // const name = e.target.parentElement.parentElement.children[1].innerHTML;
    changeBalance(change);
  })
);

decrementButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    e.target.parentElement.children[1].innerHTML =
      parseInt(e.target.parentElement.children[1].innerHTML) - 1;
    console.log(e.target.parentElement.children[1]);

    let change = parseInt(
      e.target.parentElement.parentElement.children[2].children[1].innerHTML
    );

    changeBalance(change, (decrease = false));
  })
);

buy.addEventListener("click", (e) => {});
