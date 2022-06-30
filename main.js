import Showcase from "./showcase.js?v=add";

function Main() {
  // Set Up Page;
  document.body.classList.remove("loading");

  const header = document.getElementById("header");
  const heroTitle = document.getElementById("hero-title");
  const showcase = new Showcase(document.querySelector(".showcase"));
  const workCards = document.querySelectorAll(".work-card");
  const experienceModal = document.getElementById('experienceModal');
  const experienceBootstrapModal = new bootstrap.Modal(experienceModal, {});

  // console.log(experienceBootstrapModal);

  startHeroAnimations();
  initEvents();
  setupIntersectionBehaviour(header);

  function startHeroAnimations() {
    heroTitle.classList.add("animate__animated","animate__flipInX")
    heroTitle.classList.remove("opacity-0")
    
    header.classList.add("animate__animated", "animate__fadeIn")
    header.classList.remove("opacity-0")
    
    setTimeout(function() {
      showcase.start();
    },1000)
  }

  function initEvents() {
    // document.addEventListener("scroll", onDocumentScroll.bind(this));
    for(let i=0; i<workCards.length; i++) {
      workCards[i].addEventListener("click", onWorkCardClick, true);
    }
  }

  function setupIntersectionBehaviour(el) {
    let options = {
      // root: document.querySelector('body')[0],
      // rootMargin: '0px',
      threshold: .8
    }
    
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        console.log(entry.target.id, entry.isIntersecting)
        if(entry.isIntersecting){
          el.classList.add("transparent");
        }else{
          el.classList.remove("transparent")
        }
      })
    }, options);
    let target = document.querySelector('.hero');
    observer.observe(target);
    // observer.observe(document.querySelector('.about'));
  }

  function onWorkCardClick(e) {
    experienceModal.querySelector(".modal-body").innerHTML = e.currentTarget.querySelector(".modal-data").innerHTML

    experienceBootstrapModal.show();
  }

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
