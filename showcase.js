export default function Showcase(wrapper) {
    const overlay = document.createElement("div")
    const gallery = document.createElement("div");
    overlay.classList.add("overlay");
    gallery.classList.add("gallery");
    wrapper.appendChild(gallery);
    wrapper.appendChild(overlay);

    const image = new Image();

    image.src = './assets/poster.jpg';

    image.onload = function() {
        gallery.style.backgroundImage = `url(${image.src})`;
        gallery.classList.add("zoom-out");
        setTimeout(function(){
            wrapper.classList.add("show")
        }, 2000)
    }

    // function change
}