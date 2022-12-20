let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

    if (window.scrollY > 60) {
        document.querySelector("#scroll-top").classList.add("active");
    } else {
        document.querySelector("#scroll-top").classList.remove("active");
    }
};

function loader() {
    document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut();

//typeing animation
var typed = new Typed("#love1", {
    strings: ["Love.", "Best."],
    typeSpeed: 300,
    backspeed: 300,
    loop: true,
});