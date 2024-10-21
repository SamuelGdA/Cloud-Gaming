let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(${-currentSlide * 100}%)`;
}

// Slide automático
setInterval(() => {
    moveSlide(1);
}, 6000); // Troca

    document.getElementById('search-icon').addEventListener('click', function() {
        var searchBar = document.getElementById('search-bar');
        if (searchBar.style.display === "none" || searchBar.style.display === "") {
            searchBar.style.display = "block"; // Mostra a barra de pesquisa
            searchBar.focus(); // Foca na barra de pesquisa
        } else {
            searchBar.style.display = "none"; // Esconde a barra de pesquisa
        }
    });

