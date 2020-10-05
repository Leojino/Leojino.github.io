"use strict";


function Main()  {
    // Set Up Page;
    document.title = "Jino John - Personal Space";
    const LoaderEL = document.getElementById("loader");

    init();

    async function init() {
        // remove loader
        // document.body.classList.remove("loading");
        await fadeOutLoader()
    }

    // function StartPageLoader(){

    // }

    function fadeOutLoader() {
        return new Promise( (resolve, reject) => {
            const onLoaderFadeOutDone = () => {
                LoaderEL.removeEventListener("animationend", onLoaderFadeOutDone);
                LoaderEL.style.display = "none";
                LoaderEL.style.animation = "";
                resolve();
            }
            LoaderEL.addEventListener("animationend", onLoaderFadeOutDone);
            LoaderEL.style.animation = "loader-fadeout 1s forwards";
        } )
    }

}


window.addEventListener("load", Main);

