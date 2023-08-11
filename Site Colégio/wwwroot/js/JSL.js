let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

// Função para trocar de slide automaticamente a cada 5 segundos
function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 5000);
}

// Iniciar a troca automática dos slides
autoSlide();
