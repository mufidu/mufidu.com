const texts = document.querySelector(".colorNow");
const project = document.querySelector(".projectName");
const button = document.querySelector("button");

button.addEventListener("click", function (e) {
    e.preventDefault();
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    texts.textContent = `Now the background color is ${Math.floor(
        (100 * r) / 255
    )}% red, ${Math.floor((100 * g) / 255)}% green, and ${Math.floor(
        (100 * b) / 255
    )}% blue.`;

    texts.style.color = `rgb(${Math.abs(r - 255)}, ${Math.abs(
        g - 255
    )}, ${Math.abs(b - 255)})`;

    project.style.color = `rgb(${Math.abs(r - 255)}, ${Math.abs(
        g - 255
    )}, ${Math.abs(b - 255)})`;
});
