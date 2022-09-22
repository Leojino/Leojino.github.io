const ImageStore = [
    {url: './assets/posters/IMG_8124.JPG', anim: "zoom-out"},
    {url: './assets/posters/IMG_8126.JPG', anim: "zoom-out"},
    {url: './assets/posters/IMG_8398.JPG', anim: "zoom-out"},
    {url: './assets/posters/IMG_8430.JPG', anim: "zoom-out"},
    {url: './assets/posters/IMG_8582.JPG', anim: "zoom-out"},
]

export default function Showcase(wrapper) {
    const overlay = document.createElement("div")
    const gallery = document.createElement("div");
    let currentImageId = 0;
    
    overlay.classList.add("overlay");
    gallery.classList.add("gallery");
    wrapper.appendChild(overlay);
    wrapper.appendChild(gallery);

    console.time(ImageStore[currentImageId].url)
    const imageLoader = new Image();
    
    
    imageLoader.onload = function() {
        console.timeEnd(ImageStore[currentImageId].url)
        gallery.classList.add(ImageStore[currentImageId].anim);
        gallery.style.backgroundImage = `url(${imageLoader.src})`;
        gallery.addEventListener("animationend", fadeOutCurrentImage, {once:true});
        wrapper.classList.add("show")
    }

    this.start = function startShowcase() {
        imageLoader.src = ImageStore[currentImageId].url;
    }

    function fadeOutCurrentImage() {
        wrapper.classList.remove("show");
        wrapper.addEventListener("transitionend", loadNextImage, {once: true});
    }
    
    function loadNextImage() {
        gallery.classList.remove(ImageStore[currentImageId].anim);
        if(!ImageStore[currentImageId+1]) {
            currentImageId = 0
        }else{
            currentImageId +=1;
        }
        console.time(ImageStore[currentImageId].url)
        imageLoader.src = ImageStore[currentImageId].url;
    }

    function mergeInBackground(bool) {
        if(bool){
            overlay.classList.add("merged")
        }else {
            overlay.classList.remove("merged")
        }
    }
}