const nav = document.querySelector("header nav");

/////adding opacity 1 to navbar
window.addEventListener("scroll",amin)
 function amin() {
    if (document.documentElement.scrollTop > 250) {
        nav.classList.add("nav-menu-black")
    }
    else {
        nav.classList.remove("nav-menu-black")
    }
};
/////////////////////