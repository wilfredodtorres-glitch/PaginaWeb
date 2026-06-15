document.getElementById('menu').innerHTML = `
  <div class="nav-bg">
    <nav class="navegacion-principal contenedor">
      <div class="menu-movil-header">
        <button class="boton-menu-movil" id="boton-menu-movil" aria-label="Abrir menú">
          <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path fill="#e8e6e1" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </button>
      </div>
      <div class="enlaces-menu" id="enlaces-menu">
        <a href="index.html">    
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="30" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
                <path d="M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z">
            </svg>Menú Principal</a>
        <a href="SobreMi.html">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="30" viewBox="0 0 512 512">
            <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2 35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/>
            </svg>Sobre mí
        </a>
        <a href="clientes.html">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="30" viewBox="0 0 384 512">
            <path d="M248 24a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm24 212.7l46.3 62.4c10.5 14.2 30.6 17.2 44.8 6.6s17.2-30.6 6.6-44.8l-70.5-95C274 132 234.3 112 192 112s-82 20-107.2 53.9l-70.5 95c-10.5 14.2-7.6 34.2 6.6 44.8s34.2 7.6 44.8-6.6L112 236.7 112 512c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-8.8 7.2-16 16-16s16 7.2 16 16l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-275.3z">
            </path>
            </svg>Catalogo
        </a>
        <a href="contacto.html">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="30" viewBox="0 0 512 512">
            <path d="M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM208 288l64 0c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80zm-24-96a56 56 0 1 1 112 0 56 56 0 1 1 -112 0z"/>
            </svg>Contacto
        </a>
      </div>
    </nav>
  </div>
`;

// Lógica del menú móvil
const botonMenu = document.getElementById('boton-menu-movil');
const enlacesMenu = document.getElementById('enlaces-menu');

if (botonMenu && enlacesMenu) {
  botonMenu.addEventListener('click', () => {
    enlacesMenu.classList.toggle('mostrar');
  });
}