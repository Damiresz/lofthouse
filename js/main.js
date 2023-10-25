const nav = document.querySelector(".header__top-row");
const navbtn = document.querySelector(".header__nav-btn");

navbtn.onclick = () => {
  nav.classList.toggle("header__top-row--active");
  document.body.classList.toggle("noscroll");
};

// Phone mask

mask("[data-tel-input]");

// Удаляем '+' если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll("[data-tel-input]");
phoneInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value == "+") input.value = "";
  });
  input.addEventListener("blur", () => {
    if (input.value == "+") input.value = "";
  });
});

