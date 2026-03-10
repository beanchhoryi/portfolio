window.addEventListener("load", function(){
    const loader = document.getElementById("loader-overlay");
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});