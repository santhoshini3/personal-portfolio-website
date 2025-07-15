// Typing animation
const typed = new Typed(".auto-type", {
  strings: ["Frontend Developer", "Backend Developer", "Full Stack Enthusiast"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// AOS init
AOS.init();

// Toggle theme (dark/light)
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌓";
});

// Load theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
  }
});
