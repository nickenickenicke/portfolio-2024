import "./../scss/style.scss";

/* MODAL THINGS */
const modalContainer = document.getElementById("modal-container");

document.getElementById("modaltoggle-btn")?.addEventListener("click", () => {
  toggleModal();
});

modalContainer?.addEventListener("click", (e) => {
  //Close modal by clicking outside of it
  if (e.target == modalContainer) {
    toggleModal();
  }
});

/* PREPARE FOR LANGUAGE SELECT */
const btnInitalLangSv = document.getElementById("btn-initial-lang-sv");
const btnInitalLangEn = document.getElementById("btn-initial-lang-en");
btnInitalLangSv?.addEventListener("click", () => {
  toggleModal();
});
btnInitalLangEn?.addEventListener("click", () => {
  toggleModal();
});

const toggleModal = () => {
  modalContainer?.classList.toggle("display-none");
  modalContainer?.classList.toggle("modal-container");
};
