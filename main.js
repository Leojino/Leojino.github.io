import Showcase from "./showcase.js";

function Main() {
  // Set Up Page;
  document.body.classList.remove("loading");

  this.header = document.getElementById("header");
  this.showcase = new Showcase(document.querySelector(".showcase"));

  // initEvents.call(this);
  setupHeader(this.header)
}

function setupHeader(el) {
  let options = {
    // root: document.querySelector('body')[0],
    // rootMargin: '0px',
    threshold: .8
  }
  
  let observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
      if(entry.isIntersecting){
        el.classList.add("transparent")
      }else{
        el.classList.remove("transparent")
      }
    })
  }, options);
  let target = document.querySelector('.hero');
  observer.observe(target);
}

function initEvents() {
  // document.addEventListener("scroll", onDocumentScroll.bind(this));
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

window.addEventListener("load", Main);

// document.addEventListener("readystatechange", (event) => {
//   if (event.target.readyState === "interactive") {
//     console.log(document.readyState);
//   } else if (event.target.readyState === "complete") {
//     console.log(document.readyState);
//   }
// });
