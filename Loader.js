"use script";

const Loader = function Loader(el, options, content) {

  this.Main = buildLoader(el, options, content);
  document.body.appendChild(this.Main);

//   const PlayLoader = async () => {
//     await bounceAppear("loader-brand");
//     fadeOutLoader.call(this);
//   };

//   PlayLoader();
};

Loader.prototype.PlayLoader = function() {
    bounceAppear(this.Main);
    fadeOutLoader(this);
};

function buildLoader(id, options, ContentElement) {
  const loaderTemplate = document.createElement("div");
  loaderTemplate.setAttribute("id", id);
  loaderTemplate.classList.add("loader");

  if (ContentElement) {
    loaderTemplate.appendChild(ContentElement.content.firstElementChild.cloneNode(true));
  }

  return loaderTemplate;
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
  const onLf = (e) => {
    this.Main.removeEventListener("animationend", onLf);
    this.Main.classList.add("out");
    this.Main.style.animation = "";
  };
  this.Main.addEventListener("animationend", onLf);
  // this.Main.style.animationDuration = "2s";
  this.Main.style.animationName = "loader-fadeout";
}

export default Loader;
