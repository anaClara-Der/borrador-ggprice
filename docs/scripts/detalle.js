const API_KEY = "4b1742eb29634e329d7fd29447d706ca";
// Obtener el ID de la URL
const obtenerIdDeURL = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
};

//Conectar con la api rawg para pedir mas detalles
const pedirDetalles = (juegoId) => {
  fetch(`https://api.rawg.io/api/games/${juegoId}?key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      pintarDetalles(data);
    });
};

const pintarDetalles = (juego) => {
  document.querySelector(".juego__imagen").src = juego.background_image;
  document.querySelector(".juego__titulo").textContent = juego.name;
  const lanzamiento = juego.released ? juego.released : "-";
  document.querySelector(".juego__fecha").textContent = lanzamiento;
  const plataformas = Array.isArray(juego.platforms)
    ? juego.platforms
        .filter((p) => p.platform && p.platform.name)
        .map((p) => p.platform.name)
        .join(", ")
    : "Plataformas no disponibles";

  document.querySelector(".juego__plataformas").textContent = plataformas;

  document.querySelector(".juego__descripcion--text").textContent =
    juego.description_raw;

  //Al clickear una card envia a la pagina de detalle
  clone.querySelector(".card__juego").addEventListener("click", () => {
    window.location.href = `detalle.html?id=${juego.id}`;
  });
};

// Ejecutar cuando cargue la página
document.addEventListener("DOMContentLoaded", () => {
  const id = obtenerIdDeURL();
  if (id) {
    pedirDetalles(id);
  } else {
    console.error("No se encontró el ID en la URL");
  }
});
