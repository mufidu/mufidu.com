const fs = require("fs");

const comp = "./css/style.comp.css";
const post = "./css/style.post.css";
const prefix = "./css/style.prefix.css";
const sass = "./css/style.sass.css";

try {
    fs.unlinkSync(comp);
    fs.unlinkSync(post);
    fs.unlinkSync(prefix);
    fs.unlinkSync(sass);
    //file removed
} catch (err) {
    console.error(err);
}