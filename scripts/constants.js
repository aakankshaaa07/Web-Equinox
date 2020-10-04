const balance = document.getElementById("balance");
const cartNum = document.getElementById("cart-num");
const cardArray = document.querySelector(".games__cards");
const cartItems = document.querySelector(".cart__items");

const buy = document.getElementById("buy");

const reciptItems = document.getElementById("recipt-items");

const cartBalance = document.getElementById("cart-balance");

let incrementButtons = document.querySelectorAll(".quan-inc");
let decrementButtons = document.querySelectorAll(".quan-dec");

const cartIcon = document.querySelector(".games__cart-icon");

let easterEggDone = false;
let firstRender = true;

let cartArray = [];

let searchBar = document.getElementById("search-bar");

let search = "";

const recipt = [];
