"use strict";

function Main() {
  // Set Up Page;
  document.title = "Jino John - Personal Space";
  const LoaderEL = document.getElementById("loader");

  init();

  function init() {
    // Start Loader
    // await animateLoader();
    PlayLoader();
  }

  async function PlayLoader() {
    await bounceAppear("loader-brand");
    fadeOutLoader();
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

  function fadeOutLoader() {
    function onLf(e) {
      LoaderEL.removeEventListener("animationend", onLf);
      //   document.body.classList.remove("loading");
      LoaderEL.classList.add("out");
      LoaderEL.style.animation = "";
    }
    LoaderEL.addEventListener("animationend", onLf);
    // LoaderEL.style.animationDuration = "2s";
    LoaderEL.style.animationName = "loader-fadeout";
  }

  function animateLoader() {
    return new Promise((resolve, reject) => {
      // Appear Brand
      const onFinalTextAppear = (el, index) => () => {
        el.style.opacity = "1px";
        el.removeEventListener("animationend", onFinalTextAppear);
        if (index + 1 == Spans.length) {
          resolve();
        }
      };

      const BrandEL = LoaderEL.querySelector("#loader-brand");
      const Spans = Array.from(BrandEL.querySelectorAll("span"));
      Spans.map((el, index) => {
        el.style.animationDuration = "1s";
        el.style.animationDirection = "forwards";
        el.style.animationName = "FadeIn";
        el.addEventListener("animationend", onFinalTextAppear(el, index));
      });
    }).then(
      () =>
        new Promise((resolve, reject) => {
          // FadeOut Loader screen
          const onLoaderFadeOutDone = () => {
            LoaderEL.removeEventListener("animationend", onLoaderFadeOutDone);
            // LoaderEL.style.display = "none";
            document.body.classList.remove("loading");
            LoaderEL.style.animation = "";
            resolve();
          };
          LoaderEL.addEventListener("animationend", onLoaderFadeOutDone);
          LoaderEL.style.animation = "loader-fadeout 1s forwards";
        })
    );
  }
}

window.addEventListener("load", Main);

console.log(document.readyState);

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "interactive") {
    console.log(document.readyState);
  } else if (event.target.readyState === "complete") {
    console.log(document.readyState);
  }
});
