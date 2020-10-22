export function BounceAppearTextAnimate(blockId) {
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