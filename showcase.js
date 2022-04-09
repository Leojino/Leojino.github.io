const ImageStore = [
    {url: './assets/poster.jpg'},
    {url: './assets/IMG_7347.jpeg'},
    {url: './assets/IMG_6776.jpg'},
    {url: './assets/IMG_6835.jpg'},
]

export default function Showcase(wrapper) {
    const overlay = document.createElement("div")
    const gallery = document.createElement("div");
    overlay.classList.add("overlay");
    gallery.classList.add("gallery");
    wrapper.appendChild(gallery);
    wrapper.appendChild(overlay);
    let currentImageId = 0;

    const imageLoader = new Image();

    imageLoader.src = ImageStore[currentImageId].url;
    
    imageLoader.onload = function() {
        gallery.style.backgroundImage = `url(${imageLoader.src})`;
        gallery.classList.add("zoom-out");
        gallery.addEventListener("animationend", fadeOutCurrentImage, {once:true});
        setTimeout(function(){
            wrapper.classList.add("show")
        }, 2000)
    }

    function fadeOutCurrentImage() {
        setTimeout(function(){
            wrapper.classList.remove("show");
        }, 2000)
        wrapper.addEventListener("transitionend", loadNextImage, {once: true});
    }
    
    function loadNextImage() {
        if(!ImageStore[currentImageId+1]) {
            currentImageId = 0
        }else{
            currentImageId +=1;
        }
        gallery.classList.remove("zoom-out");
        imageLoader.src = ImageStore[currentImageId].url;
    }
}