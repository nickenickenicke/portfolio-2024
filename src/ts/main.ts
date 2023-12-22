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

/* FIND ALL SPANS AND CHECK FOR lang ATTRIBUTE */
let spanElements: HTMLSpanElement[] = Array.from(
  document.getElementsByTagName("span")
) as HTMLSpanElement[];

let spanSv: HTMLSpanElement[] = [];
let spanEn: HTMLSpanElement[] = [];

spanElements.forEach((element) => {
  if (element.lang === "sv") spanSv.push(element);
  if (element.lang === "en") spanEn.push(element);
});

/* BOOL FOR IF LANGUAGE IS SWEDISH OR NOT (false = English) */
let isLangSv: boolean = true;

/* BUTTON TO SWITCH LANGUAGES */
const btnLanguage = document.getElementById("language-btn");
btnLanguage?.addEventListener("click", () => {
  if (isLangSv) {
    spanEn.forEach((element) => {
      element.classList.toggle("display-none");
    });
    spanSv.forEach((element) => {
      element.classList.toggle("display-none");
    });
    btnLanguage.innerText = "Svenska";
  }
  if (!isLangSv) {
    spanEn.forEach((element) => {
      element.classList.toggle("display-none");
    });
    spanSv.forEach((element) => {
      element.classList.toggle("display-none");
    });
    btnLanguage.innerText = "English";
  }
  isLangSv = !isLangSv;
  //Save to LS for next visit
  localStorage.setItem("IsSelectedLanguageSv", JSON.stringify(isLangSv));
});
