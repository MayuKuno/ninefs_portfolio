let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

  const wrapper = document.querySelector(".slider-wrapper");
  if (wrapper) {
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
}

window.moveSlide = moveSlide;
