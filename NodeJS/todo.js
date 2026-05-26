const fs = require('fs');
const fileName = "./tasks.json";

const loadTask = () => {
    try {
        const buffer = fs.readFileSync(fileName); 
        return JSON.parse(buffer.toString());
    } catch (error) {
        return [];
    }
}

const saveTask = (tasks) => {
    const dataJSON = JSON.stringify(tasks, null, 2); 
    fs.writeFileSync(fileName, dataJSON); 
}

const addTask = (task) => {
    const tasks = loadTask(); 
    tasks.push(task);
    saveTask(tasks);
    console.log("Task added:", task); 
}

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
    if (argument) {
        addTask(argument);
    } else {
        console.log("Please provide a task description.");
    }
} else if (command === "list") {
    const tasks = loadTask();
    console.log("Your Tasks:", tasks);
} else if (command === "remove") {
    console.log("Remove functionality not yet implemented.");
} else {
    console.log("Command not found. Use 'add', 'list', or 'remove'.");
}