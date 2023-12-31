﻿let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex].style.display = "block";
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function autoSlide() {
    nextSlide();
}

// Configure o intervalo para trocar os slides automaticamente a cada 3 segundos (3000 milissegundos)
setInterval(autoSlide, 8000);

showSlide(slideIndex);