window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // solo una vez
      }
    });
  });

  document.querySelectorAll('.filosofia-col').forEach(el => {
    observer.observe(el);
  });
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  // Abrir/cerrar el menú al hacer clic en el botón
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Cerrar el menú al hacer clic en cualquier enlace
  const navItems = navLinks.querySelectorAll("a");
  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
