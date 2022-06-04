

const toggleMenu = document.querySelector('.toggle-menu');
const closeBtn = document.querySelector('#close-btn');
const menuItems = document.querySelectorAll(".menu-item")
//for-top-nav
function display2() {
    document.querySelector('.mobile-menu').style.display = "block";
    toggleMenu.style.display = "none";
} 

toggleMenu.addEventListener('click', display2)

function display(){
    document.querySelector('.mobile-menu').style.display = "none";
    toggleMenu.style.display ="unset";
} 

closeBtn.addEventListener('click', display)

menuItems.forEach((item) => {
    item.addEventListener('click', display)
});


//for scrolling effect //taken from stack overflow
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});