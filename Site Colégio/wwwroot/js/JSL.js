// scripts.js
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

function startAutomaticSlideshow() {
    setInterval(nextSlide, 3000); // Troca de slide a cada 3 segundos
}

window.onload = startAutomaticSlideshow;
