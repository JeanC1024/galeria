// Obtener una referencia al slider y a sus elementos
var slider = document.getElementById('slider');
var sliderImage = document.getElementById('slider-image');
var prevButton = document.getElementById('prev-button');
var nextButton = document.getElementById('next-button');

// Obtener una referencia a todas las imágenes de la galería
var images = document.querySelectorAll('.gallery img');

// Variable para almacenar el índice de la imagen actual
var currentImage = 0;

// Función para mostrar el slider con una imagen
function showSlider(index) {
    currentImage = index;
    sliderImage.src = images[index].src;
    slider.style.display = 'block';
}

// Función para ocultar el slider
function hideSlider() {
    slider.style.display = 'none';
}

// Función para mostrar la imagen anterior
function showPrevImage() {
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    sliderImage.src = images[currentImage].src;
}

// Función para mostrar la imagen siguiente
function showNextImage() {
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    sliderImage.src = images[currentImage].src;
}

// Agregar un controlador de eventos para cada imagen de la galería
for (var i = 0; i < images.length; i++) {
    (function(index) {
        images[i].addEventListener('click', function() {
            showSlider(index);
        });
    })(i);
}

// Agregar controladores de eventos para los botones del slider
prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

// Agregar un controlador de eventos para ocultar el slider cuando se hace clic fuera de la imagen
slider.addEventListener('click', function(event) {
    if (event.target === slider) {
        hideSlider();
    }
});