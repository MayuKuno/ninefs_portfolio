document.querySelectorAll<HTMLElement>(".tech-tag").forEach((tag) => {
  tag.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (tag.dataset.url) window.location.href = tag.dataset.url;
  });
});
