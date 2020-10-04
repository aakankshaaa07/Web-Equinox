const leave = document.querySelector(".buttonl");
const backButton = document.querySelector(".back");
const modal = document.querySelector(".modal");

const toggleModal = () => {
  modal.classList.toggle("modal-hidden");
};

leave.addEventListener("click", toggleModal);

backButton.addEventListener("click", () => {
  toggleModal();
  window.scrollTo(0, document.body.scrollHeight);
});
