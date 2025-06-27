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
  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".whatsapp-container");

    if (window.innerWidth <= 768) {
      let isDragging = false;
      let offsetX, offsetY;

      const savedX = localStorage.getItem("whatsappPosX");
      const savedY = localStorage.getItem("whatsappPosY");

      // Si existe posición guardada, úsala
      if (savedX && savedY) {
        btn.style.left = `${savedX}px`;
        btn.style.top = `${savedY}px`;
      } else {
        // Posición por defecto en móviles si es la primera vez
        btn.style.left = "20px";
        btn.style.top = "70vh";
      }

      btn.style.position = "fixed";
      btn.style.right = "auto";
      btn.style.bottom = "auto";

      btn.addEventListener("touchstart", function (e) {
        isDragging = true;
        const touch = e.touches[0];
        const rect = btn.getBoundingClientRect();
        offsetX = touch.clientX - rect.left;
        offsetY = touch.clientY - rect.top;
      });

      btn.addEventListener("touchmove", function (e) {
        if (!isDragging) return;
        e.preventDefault();
        const touch = e.touches[0];
        const x = touch.clientX - offsetX;
        const y = touch.clientY - offsetY;

        btn.style.left = `${x}px`;
        btn.style.top = `${y}px`;

        // Guardar
        localStorage.setItem("whatsappPosX", x);
        localStorage.setItem("whatsappPosY", y);
      });

      btn.addEventListener("touchend", function () {
        isDragging = false;
      });
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // solo se activa una vez
        }
      });
    }, {
      threshold: 0.2 // activa cuando 20% del elemento entra en pantalla
    });

    document.querySelectorAll('.fade-in-up').forEach(el => {
      observer.observe(el);
    });
  });
