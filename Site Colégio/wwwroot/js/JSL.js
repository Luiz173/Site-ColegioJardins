let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");

function showSlide(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    const offset = -slideIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 8000); // Aumente o tempo para 8 segundos
}

autoSlide();
