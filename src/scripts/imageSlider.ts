let currentIndex = 0;

function moveSlide(direction: number) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

  const wrapper = document.querySelector<HTMLElement>(".slider-wrapper");
  if (wrapper) {
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
}

declare global {
  interface Window {
    moveSlide: typeof moveSlide;
  }
}

window.moveSlide = moveSlide;
