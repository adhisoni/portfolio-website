const menu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-hamburger');
const nav = document.querySelector('.menu-nav');
const body = document.querySelector('body');
const navLinks = document.querySelector('.nav-left-links');
const faders = document.querySelectorAll('.more-about-js');


// On click EventListeners //

menu.addEventListener('click', () => {
    nav.classList.toggle('open');
    navMenu.classList.toggle('hamburger-open');
    body.classList.toggle('overflow-body');
});

navMenu.addEventListener('click', () => {
    nav.classList.toggle('open');
    navMenu.classList.toggle('hamburger-open');
    body.classList.toggle('overflow-body');
});

navLinks.addEventListener('click', () => {
    nav.classList.toggle('open');
    navMenu.classList.toggle('hamburger-open');
    body.classList.toggle('overflow-body');
});



// Style on scroll Intersection Observer //

const appearOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('fade');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);


faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
