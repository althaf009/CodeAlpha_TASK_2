let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

document.getElementById('next').addEventListener('click', () => {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
});

document.getElementById('prev').addEventListener('click', () => {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
});

// Initialize the first slide
slides.forEach((slide, index) => {
    slide.style.display = index === 0 ? 'block' : 'none';
});
