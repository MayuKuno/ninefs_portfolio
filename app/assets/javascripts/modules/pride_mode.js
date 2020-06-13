document.addEventListener("DOMContentLoaded", () => {
  const photo = document.getElementById("profile-photo");
  const label = document.getElementById("toggle-label");
  const toggle = document.getElementById("toggle-pride-mode");
  const bg = document.getElementById("dot-background");

  const normalPhoto = "/images/main.jpg";
  const pridePhoto = "/images/pride.jpg";

  if (localStorage.getItem("prideMode") === "enabled") {
    enablePrideMode();
    if (toggle) toggle.checked = true;
  }

  if (toggle) {
    toggle.addEventListener("change", () => {
      document.body.classList.contains("pride-mode") ? disablePrideMode() : enablePrideMode();
    });
  }

  function enablePrideMode() {
    document.body.classList.add("pride-mode");
    if (label) label.textContent = "Low key?";
    if (photo) photo.src = pridePhoto;
    generateRainbowDots();
    localStorage.setItem("prideMode", "enabled");
  }

  function disablePrideMode() {
    document.body.classList.remove("pride-mode");
    if (label) label.textContent = "Got Pride?";
    if (photo) photo.src = normalPhoto;
    if (bg) bg.innerHTML = "";
    localStorage.setItem("prideMode", "disabled");
  }

  function generateRainbowDots() {
    const colors = ["#d8151c", "#ed9b18", "#d7c700", "#06ab99", "#52a8dd", "#995292"];
    const dotCount = 50;
    if (!bg) return;
    bg.innerHTML = "";

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("div");
      dot.style.cssText = `
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * document.body.scrollHeight}px;
        opacity: 0.6;
      `;
      bg.appendChild(dot);
    }
  }
});
