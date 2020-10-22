import { BounceAppearTextAnimate } from './animations.js'

function Main() {
  // Set Up Page;
  document.title = "Jino John - Personal Space";
  document.body.classList.remove("loading");

  this.header = document.getElementById("header");
  this.header.style.height = `${window.innerHeight}px`;
  onDocumentScroll.call(this);

  BounceAppearTextAnimate("brand-name");
  initEvents.call(this);
}

function initEvents() {
  document.addEventListener("scroll", onDocumentScroll.bind(this));
}

function onDocumentScroll(e) {
  const height = window.innerHeight - window.scrollY;
  this.header.style.height = `${height > 60 ? height : 60}px`;
}

window.addEventListener("load", Main);

// document.addEventListener("readystatechange", (event) => {
//   if (event.target.readyState === "interactive") {
//     console.log(document.readyState);
//   } else if (event.target.readyState === "complete") {
//     console.log(document.readyState);
//   }
// });
