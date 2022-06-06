

const toggleMenu = document.querySelector('.toggle-menu');
const closeBtn = document.querySelector('#close-btn');
const menuItems = document.querySelectorAll(".menu-item")
//for-top-nav
function display() {
    document.querySelector('.mobile-menu').style.display = "block";
    toggleMenu.style.display = "none";
} 

toggleMenu.addEventListener('click', display)

function display2(){
    document.querySelector('.mobile-menu').style.display = "none";
    toggleMenu.style.display ="unset";
} 

closeBtn.addEventListener('click', display2)

menuItems.forEach((item) => {
    item.addEventListener('click', display2)
});


//for scrolling effect //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//for highlighting nav-menu//

const sections = document.querySelectorAll('.page-section')
const navLi = document.querySelectorAll('nav ul li')

window.addEventListener('scroll',() =>{
    let currentSection = '';

    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop-sectionHeight / 3.5)){
            currentSection = section.getAttribute('id')
        }
    })
    navLi.forEach(list=>{
        list.classList.remove('active')
        if(list.classList.contains(currentSection)){
          list.classList.add('active')
       }
    })
})
