const inputan = document.querySelector("#inputan");
const texts = document.querySelector("#colorNow");
const project = document.querySelector("#projectName");

inputan.addEventListener("submit", function (e) {
    e.preventDefault();

    const r = inputan.elements.red;
    const g = inputan.elements.green;
    const b = inputan.elements.blue;

    const newColor = `rgb(${Math.floor((r.value * 255) / 100)}, ${Math.floor(
        (g.value * 255) / 100
    )}, ${Math.floor((b.value * 255) / 100)})`;
    const textNewColor = `rgb(${Math.abs(
        Math.floor((r.value * 255) / 100) - 255
    )}, ${Math.abs(Math.floor((g.value * 255) / 100) - 255)}, ${Math.abs(
        Math.floor((b.value * 255) / 100) - 255
    )})`;

    // Start styling
    document.body.style.backgroundColor = newColor;

    texts.textContent = `Now the background color is ${r.value}% red, ${g.value}% green, and ${b.value}% blue.`;

    texts.style.color = textNewColor;

    project.style.color = textNewColor;

    r.value = "";
    g.value = "";
    b.value = "";
});
