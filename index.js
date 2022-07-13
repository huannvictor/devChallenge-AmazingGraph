//* applying toggle menu

const nav = document.querySelector("nav");
const toggle = document.querySelectorAll(".toggle");

for (const element of toggle) {
  element.addEventListener("click", () => nav.classList.toggle("show"));
}

//* closing menu when a link is clicked

const links = document.querySelectorAll("nav div.menu ul li a");

for (const element of links) {
  element.addEventListener("click", () => nav.classList.remove("show"));
}
