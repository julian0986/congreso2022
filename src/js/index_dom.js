import hamburguerMenu from "./menu_hamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".menup", ".mostrarham li a");
});
