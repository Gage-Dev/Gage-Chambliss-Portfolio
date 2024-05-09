function toggleMenu() {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  burger.classList.toggle("active");
  navLinks.classList.toggle("active");
}
