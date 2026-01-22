window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});


ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('#home', { delay: 50, origin: 'left' });
ScrollReveal().reveal('.FACE', { delay: 60, origin: 'top' });
ScrollReveal().reveal('.About-Me', { delay: 75, origin:'top'});
ScrollReveal().reveal('.About-Pic', { delay: 70});
ScrollReveal().reveal('.Card1', { delay: 80, origin: 'top'});
ScrollReveal().reveal('.Card2', { delay: 80, origin: 'bottom'});
ScrollReveal().reveal('.Card3', { delay: 80, origin: 'top'});
ScrollReveal().reveal('#portfolio', { delay: 70, origin: 'left' });
ScrollReveal().reveal('.pic-container1', { delay: 70, origin: 'top' });
ScrollReveal().reveal('.pic-container2', { delay: 70, origin: 'bottom' });
ScrollReveal().reveal('.port-info', { delay: 70, origin: 'bottom' });
ScrollReveal().reveal('.Contact-Container', { delay: 70, origin: 'bottom' });
ScrollReveal().reveal('.Contact-Me-Container', { delay: 80, origin: 'right' });