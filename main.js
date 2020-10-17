"use strict";

function Main() {
  // Set Up Page;
  document.title = "Jino John - Personal Space";
  document.body.classList.remove("loading");

  this.header = document.getElementById("header");
  this.header.style.height = `${window.innerHeight}px`;
  onDocumentScroll.call(this);

  bounceAppear("brand-name")

  document.addEventListener("scroll", onDocumentScroll.bind(this));
}

function onDocumentScroll(e) {
  const height = window.innerHeight - window.scrollY;
  this.header.style.height = `${height > 60 ? height : 60}px`;
}

function bounceAppear(blockId) {
  return new Promise((resolve, reject) => {
    const Block = document.getElementById(blockId);
    const blockSpans = Block.getElementsByTagName("span");
    const spans = Array.from(blockSpans);

    spans.map((span, index) => {
      span.style.opacity = "";
      function endAnime(e) {
        e.stopPropagation();
        span.removeEventListener("animationend", endAnime);
        span.style.opacity = "1";
        span.style.animationName = "";

        if (spans.length == index + 1) {
          resolve();
        }
      }
      span.addEventListener("animationend", endAnime);
      span.style.animationName = "BounceAppear";
    });
  });
}

window.addEventListener("load", Main);

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "interactive") {
    console.log(document.readyState);
  } else if (event.target.readyState === "complete") {
    console.log(document.readyState);
  }
});
