const hamburguesaMenu = document.getElementById("menu-button");
const cerrarMenu = document.getElementById("menu-cerrar");
const navMovil = document.getElementById("nav-movil");

const abrirLogin = document.getElementById("nav__abrir-login");
const popUpContainer = document.getElementById("container__iniciar-sesion");
const cerrarPopup = document.getElementById("popUp__cerrar");
const backdrop = document.getElementById("modal-backdrop");

const abrirRegistro = document.getElementById("nav__abrir-singUp");
const popUpRegistro = document.getElementById("container__registrarse");
const cerrarRegistro = document.getElementById("popUp__cerrar-registro");
//Cerrar y abrir el menu hamburguesa
hamburguesaMenu.addEventListener("click", () => {
  hamburguesaMenu.classList.add("hidden");
  hamburguesaMenu.classList.remove("visible");

  cerrarMenu.classList.add("visible");
  cerrarMenu.classList.remove("hidden");

  navMovil.classList.add("visible");
});

cerrarMenu.addEventListener("click", () => {
  hamburguesaMenu.classList.add("visible");
  hamburguesaMenu.classList.remove("hidden");

  cerrarMenu.classList.remove("visible");
  cerrarMenu.classList.add("hidden");

  navMovil.classList.remove("visible");
});

//Al hacer click en iniciar seción se abre el recuadro
abrirLogin.addEventListener("click", (e) => {
  e.preventDefault();
  popUpContainer.style.display = "block";
  backdrop.style.display = "block";
  popUpContainer.classList.remove("cerrar");
  popUpContainer.classList.add("abrir");
});

//Cerrar al hacer click en la x
cerrarPopup.addEventListener("click", () => {
  popUpContainer.classList.remove("abrir");
  popUpContainer.classList.add("cerrar");
  setTimeout(() => {
    popUpContainer.style.display = "none";
    backdrop.style.display = "none";
  }, 300);
});

//Al hacer click afuera
backdrop.addEventListener("click", () => {
  popUpContainer.classList.remove("abrir");
  popUpContainer.classList.add("cerrar");
  setTimeout(() => {
    popUpContainer.style.display = "none";
    backdrop.style.display = "none";
  }, 300);
});

// Abrir el registro
abrirRegistro.addEventListener("click", (e) => {
  e.preventDefault();
  popUpRegistro.style.display = "block";
  backdrop.style.display = "block";
  popUpRegistro.classList.remove("cerrar");
  popUpRegistro.classList.add("abrir");
});
// Cerrar al hacer  click en la x
cerrarRegistro.addEventListener("click", () => {
  popUpRegistro.classList.remove("abrir");
  popUpRegistro.classList.add("cerrar");
  setTimeout(() => {
    popUpRegistro.style.display = "none";
    backdrop.style.display = "none";
  }, 300);
});
// Cerrar al hacer clic fuera del popup
backdrop.addEventListener("click", () => {
  // Cerrar ambos si están abiertos
  if (popUpContainer.classList.contains("abrir")) {
    popUpContainer.classList.remove("abrir");
    popUpContainer.classList.add("cerrar");
    setTimeout(() => {
      popUpContainer.style.display = "none";
      backdrop.style.display = "none";
    }, 300);
  }

  if (popUpRegistro.classList.contains("abrir")) {
    popUpRegistro.classList.remove("abrir");
    popUpRegistro.classList.add("cerrar");
    setTimeout(() => {
      popUpRegistro.style.display = "none";
      backdrop.style.display = "none";
    }, 300);
  }
});

//Al hacer click en el documento se cierra el menú hamburguesa
document.addEventListener("click", (e) => {
  const esClickDentroDelMenu =
    navMovil.contains(e.target) || hamburguesaMenu.contains(e.target);

  if (!esClickDentroDelMenu && navMovil.classList.contains("visible")) {
    // Ocultar el menú
    navMovil.classList.remove("visible");
    cerrarMenu.classList.remove("visible");
    cerrarMenu.classList.add("hidden");
    hamburguesaMenu.classList.add("visible");
    hamburguesaMenu.classList.remove("hidden");
  }
});
