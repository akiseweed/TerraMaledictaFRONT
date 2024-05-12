const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let counter = 1;
const slideWidth = slides[0].clientWidth;

function slide() {
    slider.style.transform = `translateX(${-slideWidth * counter}px)`;
    counter++;
    if (counter === slides.length) {
        counter = 0;
        setTimeout(() => {
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
        }, 500);
    }
}
setInterval(slide, 1000);
