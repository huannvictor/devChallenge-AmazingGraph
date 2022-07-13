const nav = document.querySelector("nav");
const toggle = document.querySelectorAll(".toggle");

for (const element of toggle) {
  element.addEventListener("click", () => nav.classList.toggle("show"));
}
