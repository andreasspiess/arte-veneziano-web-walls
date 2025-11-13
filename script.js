console.log("Arte Veneziano Web & Walls ist geladen!");

// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
    });
  }
});
