const h1 = document.querySelector("h1");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  h1.textContent = `Now it is rgb(${r}, ${g}, ${b})`;

  h1.style.color = `rgb(${Math.abs(r - 255)}, ${Math.abs(
    g - 255
  )}, ${Math.abs(b - 255)})`;
});
