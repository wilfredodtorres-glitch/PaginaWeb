document.getElementById('carrusel').innerHTML = `
<section class="carrusel-seccion">
  <div class="carrusel">
    <div class="carrusel-item">
      <img src="imagen1.jpg" alt="Desayuno especial">
    </div>
    <div class="carrusel-item">
      <img src="imagen2.jpg" alt="Almuerzo del día">
    </div>
    <div class="carrusel-item">
      <img src="imagen3.jpg" alt="Cena especial">
    </div>
    <div class="carrusel-item">
      <img src="imagen4.jpg" alt="Refacciones">
    </div>
  </div>
</section>
`;

const carrusel = document.querySelector('.carrusel');
const items = document.querySelectorAll('.carrusel-item');
let actual = 0;
let direccion = 1;

setInterval(() => {
  actual += direccion;

  if (actual === items.length - 1) direccion = -1;
  if (actual === 0) direccion = 1;

  carrusel.scrollTo({ left: carrusel.offsetWidth * actual, behavior: 'smooth' });
}, 2000);