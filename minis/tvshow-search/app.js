const form = document.querySelector("#moviesearch");
const picts = document.querySelectorAll("img");
const colomns = document.querySelector("#films");

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    deleteImgs();

    let judul = form.elements.title.value;
    const config = { params: { q: judul } };
    const hasil = await axios.get(
        `https://api.tvmaze.com/search/shows`,
        config
    );
    gambar(hasil.data);
    form.elements.title.value = "";
});

const gambar = (shows) => {
    for (let show of shows) {
        if (show.show.image) {
            const cols = document.createElement("DIV");
            cols.classList.add("col");
            const gambar = document.createElement("IMG");
            gambar.src = show.show.image.medium;
            gambar.classList.add("my-3");
            cols.append(gambar);
            const nama = document.createElement("h3");
            nama.innerHTML = show.show.name;
            cols.append(nama);
            colomns.append(cols);
        }
    }
};
const deleteImgs = function () {
    const imgs = document.querySelectorAll("img");
    for (let img of imgs) {
        img.remove();
    }
    const juduls = document.querySelectorAll("h3");
    for (let i of juduls) {
        i.remove();
    }
};
