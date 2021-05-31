let maximum = parseInt(prompt("Enter the maximum number you want to guess!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter the valid number!"));
}

const target = Math.floor(Math.random() * maximum) + 1;

let guess = prompt(`Enter your guess! (1 to ${maximum})`);
let attempt = 1;

while (parseInt(guess) !== target) {
    attempt++;
    if (guess > target) {
        guess = prompt("It's too big");
    }

    if (guess < target) {
        guess = prompt("Its too small");
    }
}

alert(
    `Congrats! You took ${attempt} attempts. Refresh the page to play again.`
);
