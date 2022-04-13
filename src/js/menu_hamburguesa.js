export default function hamburguerMenu(panelBtn, menup) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn)) {
      d.querySelector(menup).classList.toggle("is-active");
    }
  });
}
