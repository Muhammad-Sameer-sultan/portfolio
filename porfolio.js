console.log("code is Runing");

// for section scrolling scroll bar for active link
let section= document.querySelectorAll("section");
let navlinks= document.querySelectorAll("header nav a");

window.onscroll =() => {

    section.forEach(sec=>{

        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight; 
        let id= sec.getAttribute('id');
        // console.log(top,offset,height);
        if(top>= offset && top <= offset + height)
        {
            navlinks.forEach(link=>{
                link.classList.remove('landing');
                document.querySelector('header nav a[href*='+id+']').classList.add('landing');

            })
            // console.log("Change");
        }
    })
// Header sticky
    header= document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('landing');

}
// toogle navbar
let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');
 

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('landing');
    // console.log("working");
}


// scroll reval

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});



ScrollReveal().reveal('.heading, .home-content', { origin: 'top' });
ScrollReveal().reveal('.home-image, .service-container, .porfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// typed js

const typed= new Typed('.multi-text',{
    strings: ['Frontend Developer', 'PSD to HTMl','Figma to HTMl','Web develper'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})




