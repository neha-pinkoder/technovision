//select element function
const selectElement = function(element){
  return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function(){
  body.classList.toggle('open');
});

//LOGO
document.addEventListener('DOMContentLoaded', () => {
    function animateSgv (id, delay, delayIncrement){
        const logo = document.getElementById(id);
        const logoPaths = document.querySelectorAll(`#${id} path`);
        delay = delay;
        for(let i = 0; i < logoPaths.length;i++){
            //console.log(logoPaths[i].getTotalLength());
            logoPaths[i].style.strokeDasharray  = logoPaths[i].getTotalLength();
            logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
            logoPaths[i].style.animation = `line-anim 2s ease forwards ${delay}s`;
            delay+=delayIncrement;
            console.log(delay)
        }
        logo.style.animation = `fill 0.5s ease forwards ${delay}s`;
    }
    animateSgv('logo', 0, 0.3)
}, false);

// parallax//

// window.addEventListener('scroll', function(){
//   const parallax=document.querySelector('.parallax');
//   let scrollPosition = window.pageYOffset;
// console.log(scrollPosition);
//  parallax.style.transform= 'translateY(' + (scrollPosition*.3.5) + 'px)';
// });

// Scroll reveal//

window.sr= ScrollReveal();

sr.reveal('.animate-left',{
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay: 300
});

sr.reveal('.animate-right',{
  origin: 'right',
  duration: 1000,
  distance: '25rem',
  delay: 600
});

sr.reveal('.animate-top',{
  origin: 'top',
  duration: 1000,
  distance: '25rem',
  delay: 600
});

sr.reveal('.animate-bottom',{
  origin: 'bottom',
  duration: 1000,
  distance: '25rem',
  delay: 600
});
