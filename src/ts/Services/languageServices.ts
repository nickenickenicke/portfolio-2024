/* BOOL FOR IF LANGUAGE IS SWEDISH OR NOT (default is Swedish, false = English) */
let isLangSv: boolean = true;

/* FIND ALL SPANS AND CHECK FOR lang ATTRIBUTE */
let spanElements: HTMLSpanElement[] = Array.from(
  document.getElementsByTagName("span")
) as HTMLSpanElement[];

let spanSv: HTMLSpanElement[] = [];
let spanEn: HTMLSpanElement[] = [];

spanElements.forEach((element) => {
  if (element.lang === "sv") spanSv.push(element);
  if (element.lang === "en") {
    spanEn.push(element);
    element.classList.add("display-none");
  }
});

/* BUTTON TO SWITCH LANGUAGES */
const btnLanguage = document.getElementById("language-btn");
btnLanguage?.addEventListener("click", () => {
  switchLanguages();
  isLangSv = !isLangSv;
  saveLanguageToLs();
});

/* LANGUAGE SELECT MODAL */
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

const btnInitalLangSv = document.getElementById("btn-initial-lang-sv");
const btnInitalLangEn = document.getElementById("btn-initial-lang-en");
btnInitalLangSv?.addEventListener("click", () => {
  //Default language is Swedish
  saveLanguageToLs();
  toggleModal();
});
btnInitalLangEn?.addEventListener("click", () => {
  switchLanguages();
  isLangSv = false;
  saveLanguageToLs();
  toggleModal();
});

const toggleModal = () => {
  modalContainer?.classList.toggle("display-none");
  modalContainer?.classList.toggle("modal-container");
};

/* FUNCTION TO SWITCH LANGUAGE TEXTS */
const switchLanguages = () => {
  spanEn.forEach((element) => {
    element.classList.toggle("display-none");
  });
  spanSv.forEach((element) => {
    element.classList.toggle("display-none");
  });
  if (btnLanguage) btnLanguage.innerHTML = "Svenska";
  if (btnLanguage && !isLangSv) btnLanguage.innerHTML = "English";
};

/* FUNCTION TO SAVE LAGUAGE TO LS FOR FUTURE VISITS */
const saveLanguageToLs = () => {
  localStorage.setItem("IsSelectedLanguageSv", JSON.stringify(isLangSv));
};

/*  CHECK LOCAL STORAGE,
    CHOOSE CORRECT LANGUAGE,
    SET CORRECT INITIAL TEXT FOR LANGUAGE WITCH BUTTON
    TOGGLE MODAL */
if (localStorage.getItem("IsSelectedLanguageSv")) {
  isLangSv = JSON.parse(localStorage.getItem("IsSelectedLanguageSv") || "true");
}
if (isLangSv) {
  (btnLanguage as HTMLButtonElement).innerText = "English";
}
if (!isLangSv) {
  switchLanguages();
  (btnLanguage as HTMLButtonElement).innerText = "Svenska";
}
if (!localStorage.getItem("IsSelectedLanguageSv")) toggleModal();
