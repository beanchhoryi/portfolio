const content = document.getElementById("content");;

const navLinks = document.querySelectorAll("nav a");
const navbar = document.querySelector(".navbar");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const targetId = link.getAttribute("href").replace("#", "");
    const targetSection = document.getElementById(targetId);

    if (!targetSection) return;

    const navbarHeight = navbar.offsetHeight;
    const sectionTop =
      targetSection.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth"
    });
  });
});

window.addEventListener("load", function(){
  document.getElementById("loader").style.display = "none";
});