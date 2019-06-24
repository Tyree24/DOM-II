// Your code goes here

//MOUSEOVERs
const logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseover", e => {
  logo.textContent = "Party Bus ";
});

const navBackground = document.querySelector(".nav-container");
document.addEventListener("keydown", e => {
  navBackground.style.background = getRandomColor();
});

//button
const button = document.querySelectorAll(".btn");
button[0].addEventListener("click", event => {
  button[0].style.backgroundColor = "red";
});

button[1].addEventListener("click", event => {
  button[1].style.backgroundColor = "green";
});
button[2].addEventListener("click", event => {
  button[2].style.backgroundColor = "black";
});

const introHeadline = document.querySelector(".intro h2");
// console.log(introHeadline);
introHeadline.addEventListener("mouseover", event => {
  introHeadline.textContent = "Let's party!";
});
introHeadline.addEventListener("mouseout", event => {
  introHeadline.textContent = "Welcome To Fun Bus!";
});

const mainNav = document.querySelector(".main-navigation");
mainNav.addEventListener("mouseenter", event => {
  mainNav.style.backgroundColor = "red";
  mainNav.style.color = "white";
});

window.addEventListener("load", event => {
  alert("Welcome to the party!");
});

const footer = document.querySelector(".footer");
window.addEventListener("scroll", event => {
  footer.style.backgroundColor = "red";
});
