const slides = document.querySelectorAll(".slide");
const indicator = document.getElementById("indicator");

let index = 0;

function update(){
  slides.forEach((s,i)=>{
    s.classList.toggle("active", i === index);
  });

  indicator.textContent = `${index+1} / ${slides.length}`;
}

document.getElementById("next").onclick = ()=>{
  if(index < slides.length-1) index++;
  update();
};

document.getElementById("prev").onclick = ()=>{
  if(index > 0) index--;
  update();
};

// WhatsApp link dinámico
const waNumber = "522221234567";
const waMessage = "Hola 😊 Confirmo mi asistencia al cumpleaños de Sofía 👑✨";

document.getElementById("waLink").href =
  `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

update();