console.log("=== WELCOME TO THE CONSOLE TODOLIST ===");
let input = prompt("Type a command:", "new");
let tasks = [];
while (input !== "q" && input !== "quit") {
    if (input === "new") {
        let taskBaru = prompt("What task do you wanna add?");
        tasks.push(taskBaru);
        console.log(`${tasks[tasks.length - 1]} added successfully.`);
        input = prompt("Type a command:");
    } else if (input === "list") {
        console.log("################");
        for (let task of tasks) {
            console.log(`${tasks.indexOf(task) + 1} | ${task}`);
        }
        console.log("################");
        input = prompt("Type a command.");
    } else if (input === "delete") {
        let index = prompt("Which task you wanna delete (the order)?");
        let deleted = tasks.splice(index - 1, 1);
        console.log(`${deleted} has been deleted.`);
        input = prompt("Type a command:");
    }
}

console.log("You quit");
