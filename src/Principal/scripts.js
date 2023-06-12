
const aside = document.querySelector(".aside");
const button = document.querySelector("#open-aside");
const icon = document.querySelector(".arrow-icon");

function visible() {
  let clase = aside.classList;
  console.log(clase);
  if (aside.classList[1] === "hidden") {
    aside.classList.remove("hidden");
    aside.classList.add("visible");
    icon.classList.add("arrow-icon-rotate");
  } else {
    aside.classList.remove("visible");
    aside.classList.add("hidden");
    icon.classList.remove("arrow-icon-rotate");
  }
}
button.addEventListener("click", visible);
