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
  setupCanvasAnimation(this.header);
}

function initEvents() {
  document.addEventListener("scroll", onDocumentScroll.bind(this));
}

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

function onDocumentScroll(e) {
  const height = window.innerHeight - window.scrollY;
  console.clear()
  console.log(this.header.clientHeight, window.innerHeight);
  if( this.header.innerHeight === height ) {
    return
  };
  this.header.style.height = `${height > 60 ? height : 60}px`;
}


function setupCanvasAnimation(wrapper) {

  // const canvas = document.createElement("canvas");
  // const context = canvas.getContext("2d");

  // canvas.height = wrapper.offsetHeight;
  // canvas.width = wrapper.offsetWidth;

  // context.strokeStyle = "#C3073F";
  // context.strokeRect(75, 140, 1, 1);

  // canvas.classList.add("hero-convas");

  const container = document.createElement("div")
  container.classList.add("showcase");
  wrapper.appendChild(container);

  const image = new Image();

  image.src = './assets/poster.jpg';

  image.onload = function() {
    container.style.backgroundImage = `url(${image.src})`;
    
    setTimeout(function(){
      container.classList.add("show")
    }, 2000)
  }

}

window.addEventListener("load", Main);

// document.addEventListener("readystatechange", (event) => {
//   if (event.target.readyState === "interactive") {
//     console.log(document.readyState);
//   } else if (event.target.readyState === "complete") {
//     console.log(document.readyState);
//   }
// });
