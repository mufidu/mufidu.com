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

  texts.style.color = `rgb(${Math.abs(r.value - 255)}, ${Math.abs(
    g.value - 255
  )}, ${Math.abs(b.value - 255)})`;

  project.style.color = `rgb(${Math.abs(r.value - 255)}, ${Math.abs(
    g.value - 255
  )}, ${Math.abs(b.value - 255)})`;

  r.value = "";
  g.value = "";
  b.value = "";
});

// const h1 = document.querySelector(".colorNow");
// const button = document.querySelector("button");

// button.addEventListener("click", function (e) {
//   e.preventDefault();
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);

//   document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

//   h1.textContent = `Now it is ${Math.floor((100 * r) / 255)}% red, ${Math.floor(
//     (100 * g) / 255
//   )}% green, and ${Math.floor((100 * b) / 255)}% blue.`;

//   h1.style.color = `rgb(${Math.abs(r - 255)}, ${Math.abs(g - 255)}, ${Math.abs(
//     b - 255
//   )})`;
// });
