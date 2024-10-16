let currentSlides = [0, 0, 0]; // Array para almacenar el estado de cada carrusel

function showSlide(index, carouselIndex) {
  const carousels = document.querySelectorAll('.carousel');
  const slides = carousels[carouselIndex].querySelectorAll('.slides img');
  
  slides.forEach(slide => slide.classList.remove('active'));
  
  if (index >= slides.length) {
    currentSlides[carouselIndex] = 0;
  } else if (index < 0) {
    currentSlides[carouselIndex] = slides.length - 1;
  } else {
    currentSlides[carouselIndex] = index;
  }

  slides[currentSlides[carouselIndex]].classList.add('active');
}

function changeSlide(direction, carouselIndex) {
  showSlide(currentSlides[carouselIndex] + direction, carouselIndex);
}

window.onload = () => {
  for (let i = 0; i < currentSlides.length; i++) {
    showSlide(currentSlides[i], i);
  }
};
