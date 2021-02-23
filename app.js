const butt = document.querySelector("button");
const h5 = document.querySelector("p");

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

async function rainbow() {
  h5.innerHTML = "";
  await delayedColorChange("white", 400);
  await delayedColorChange("red", 1500);
  await delayedColorChange("orange", 1500);
  await delayedColorChange("yellow", 1500);
  await delayedColorChange("green", 1500);
  await delayedColorChange("blue", 1500);
  await delayedColorChange("indigo", 1500);
  await delayedColorChange("violet", 1500);
  h5.innerHTML = "The show has finished. Click again to repeat.";
}

butt.addEventListener("click", function (e) {
  e.preventDefault();
  rainbow();
});
