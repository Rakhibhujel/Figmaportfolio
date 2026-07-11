// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navLinks.classList.toggle("show");
});

// Close Menu After Clicking a Link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navLinks.classList.remove("show");
    });
});

// Active Navigation Link

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

const words = [

    "BIT Second Semester Student",

    "Frontend Developer",

    "Web Designer",

    "Problem Solver"

];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function type(){

    currentWord = words[wordIndex];

    if(isDeleting){

        typing.textContent = currentWord.substring(0, letterIndex--);

    }else{

        typing.textContent = currentWord.substring(0, letterIndex++);

    }

    if(!isDeleting && letterIndex === currentWord.length + 1){

        isDeleting = true;

        setTimeout(type,1200);

        return;
    }

    if(isDeleting && letterIndex === 0){

        isDeleting = false;

        wordIndex++;

        if(wordIndex === words.length){

            wordIndex = 0;
        }

    }

    setTimeout(type,isDeleting ? 60 : 100);

}

type();

/*================ CURRENT YEAR ================*/

const year = document.getElementById("year");

if(year){
    year.textContent = new Date().getFullYear();
}

/*================ SCROLL TO TOP ================*/

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollBtn.classList.add("show");

    }else{

        scrollBtn.classList.remove("show");
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});