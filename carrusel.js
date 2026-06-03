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
<div class="contenido-carrusel">
  <div class="contenido-carrusel">
        <h2>Chef<span>Gourmet</span></h2>
        <div class="ubicacion">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="88" height="88" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFC107" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="11" r="3" />
            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
          </svg>
          <p>Alajuela, Costa Rica</p>
        </div>
        <a class="boton" href="#">Contactar</a>
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