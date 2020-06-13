document.querySelectorAll(".tech-tag").forEach((tag) => {
  tag.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    window.location.href = tag.dataset.url;
  });
});
