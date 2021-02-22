const inputan = document.querySelector("#inputan");
const texts = document.querySelector("#colorNow");
const project = document.querySelector("#projectName");

inputan.addEventListener("submit", function (e) {
  e.preventDefault();

  const r = inputan.elements.red;
  const g = inputan.elements.green;
  const b = inputan.elements.blue;

  document.body.style.backgroundColor = `rgb(${Math.floor(
    (r.value * 255) / 100
  )}, ${Math.floor((g.value * 255) / 100)}, ${Math.floor(
    (b.value * 255) / 100
  )})`;

  texts.textContent = `Now it is ${r.value}% red, ${g.value}% green, and ${b.value}% blue.`;

  texts.style.color = `rgb(${Math.abs(Math.floor(
    (r.value * 255) / 100 - 255)}, ${Math.abs(
    Math.floor((g.value * 255) / 100) - 255
  )}, ${Math.abs(Math.floor(
    (b.value * 255) / 100
  ) - 255)})`;

  project.style.color = `rgb(${Math.abs(r.value - 255)}, ${Math.abs(
    g.value - 255
  )}, ${Math.abs(b.value - 255)})`;

  r.value = "";
  g.value = "";
  b.value = "";
});
