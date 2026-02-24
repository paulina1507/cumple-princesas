document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll(".slide");
  const indicator = document.getElementById("indicator");

  let index = 0;

  function update() {
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === index);
    });

    indicator.textContent = `${index + 1} / ${slides.length}`;
  }

  document.getElementById("next").onclick = () => {
    if (index < slides.length - 1) index++;
    update();
  };

  document.getElementById("prev").onclick = () => {
    if (index > 0) index--;
    update();
  };

  // WhatsApp link dinámico
  const waNumber = "522461700983";
  const waMessage = "¡Hola! Confirmo con mucha emoción mi asistencia al cumpleaños de Nasya Mailen ¡Nos vemos en su gran día!";

  document.getElementById("waLink").href =
    `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  update();

  const intro = document.getElementById("introScreen");
  const music = document.getElementById("bgMusic");
  const musicBtn = document.getElementById("musicBtn");
  const musicIcon = document.getElementById("musicIcon");

  intro.addEventListener("click", () => {
    music.volume = 0.5;
    music.play();

    musicBtn.classList.add("playing");
    musicIcon.src = "assets/img/pause.svg";

    intro.classList.add("hidden");

    setTimeout(() => {
      intro.remove();
    }, 600);
  });

  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicBtn.classList.add("playing");
      musicIcon.src = "assets/img/pause.svg";
    } else {
      music.pause();
      musicBtn.classList.remove("playing");
      musicIcon.src = "assets/img/play.svg";
    }
  });

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const cerrar = document.getElementById("cerrar");

  document.querySelectorAll(".galeria img").forEach(img => {
    img.style.cursor = "pointer";

    img.addEventListener("click", function (e) {
      e.stopPropagation();
      lightbox.classList.add("active");
      lightboxImg.src = this.src;
    });
  });

  cerrar.addEventListener("click", function (e) {
    e.stopPropagation();
    lightbox.classList.remove("active");
  });

  lightbox.addEventListener("click", function () {
    lightbox.classList.remove("active");
  });

  const particlesContainer = document.querySelector(".particles");

  for (let i = 0; i < 25; i++) {
    const particle = document.createElement("span");
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.animationDuration = (6 + Math.random() * 6) + "s";
    particle.style.animationDelay = Math.random() * 5 + "s";
    particle.style.width = particle.style.height = (4 + Math.random() * 6) + "px";
    particlesContainer.appendChild(particle);
  }

});