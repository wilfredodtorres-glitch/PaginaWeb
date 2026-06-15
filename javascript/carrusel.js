document.getElementById('carrusel').innerHTML = `
<section class="carrusel-seccion">
  <div class="carrusel">
    <div class="carrusel-item">
      <img src="imagenes/imagen1.jpg" alt="Desayuno especial">
    </div>
    <div class="carrusel-item">
      <img src="imagenes/imagen2.jpg" alt="Almuerzo del día">
    </div>
    <div class="carrusel-item">
      <img src="imagenes/imagen3.jpg" alt="Cena especial">
    </div>
    <div class="carrusel-item">
      <img src="imagenes/imagen4.jpg" alt="Refacciones">
    </div>
    <div class="carrusel-item">
      <img src="imagenes/imagen1.jpg" alt="Desayuno especial">
    </div>
  </div>
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
        <a class="boton" href="contacto.html">Contactar</a>
    </div>
</section>
`;

const carrusel = document.querySelector('.carrusel');
const items = document.querySelectorAll('.carrusel-item');

const totalReales = items.length - 1; // la última es la copia

let actual = 0;

setInterval(() => {

    actual++;

    carrusel.scrollTo({
        left: carrusel.offsetWidth * actual,
        behavior: 'smooth'
    });

    // Cuando llega a la copia de la primera imagen
    if (actual === totalReales) {

        setTimeout(() => {

            // Salto instantáneo a la primera real
            carrusel.style.scrollBehavior = 'auto';

            carrusel.scrollLeft = 0;

            actual = 0;

            requestAnimationFrame(() => {
                carrusel.style.scrollBehavior = 'smooth';
            });

        }, 600); // debe ser menor que el intervalo
    }

}, 2000);