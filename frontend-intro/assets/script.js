let lines = document.getElementsByClassName("line");
console.log(lines);

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        lines[i].innerHTML += "-";
    }
}
