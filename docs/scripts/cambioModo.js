// Ejecutar cuando cargue la página
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".modo__boton");
  const circulo = document.querySelector(".modo__circulo");
  let cambioCirculo = circulo.classList.contains("transformacion");
  console.log(circulo.classList.contains("transformacion"));

  //Hacer lo de cambio de modo con el botón

  cambiarModo(btn, circulo);
});

const cambiarModo = (btn, circulo) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("fondo");
    circulo.classList.toggle("transformacion");

    if (circulo.classList.contains("transformacion")) {
      console.log("tiene el transoform");
    } else {
      console.log("no lo tiene");
    }
  });
};
