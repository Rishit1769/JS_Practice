// Node.js CLI Task Manager
// Objective: Create a command-line application to manage tasks with file persistence

// require() - Import the 'fs' (file system) module for file operations
const fs = require('fs');

// Define the file path where tasks will be stored as JSON
const fileName = "./tasks.json";

// Function to load tasks from the JSON file
const loadTask = () => {
    try {
        // readFileSync() - Synchronously read file contents
        // Returns a Buffer object containing file data
        const buffer = fs.readFileSync(fileName);
        // toString() - Convert buffer to string, then parse JSON
        // JSON.parse() converts JSON string back to JavaScript objects
        return JSON.parse(buffer.toString());
    } catch (error) {
        // If file doesn't exist or has error, return empty array
        return [];
    }
}

// Function to save tasks to the JSON file
const saveTask = (tasks) => {
    // JSON.stringify() converts JavaScript object/array to JSON string
    // Parameters: (object, replacer, space) - space=2 for pretty formatting
    const dataJSON = JSON.stringify(tasks, null, 2);
    // writeFileSync() - Synchronously write data to file
    // This creates the file if it doesn't exist
    fs.writeFileSync(fileName, dataJSON);
}

// Function to add a new task
const addTask = (task) => {
    // Load existing tasks from file
    const tasks = loadTask();
    // Add the new task to the array
    tasks.push(task);
    // Save updated tasks back to file
    saveTask(tasks);
    console.log("Task added:", task);
}

// Get command-line arguments
// process.argv is an array: [node, script, command, argument, ...]
const command = process.argv[2];  // The command (add, list, remove, etc.)
const argument = process.argv[3];  // The argument (task description, etc.)

// Handle different commands
if (command === "add") {
    // Check if argument was provided
    if (argument) {
        addTask(argument);
    } else {
        console.log("Please provide a task description.");
    }
} else if (command === "list") {
    // Load and display all tasks
    const tasks = loadTask();
    console.log("Your Tasks:", tasks);
} else if (command === "remove") {
    console.log("Remove functionality not yet implemented.");
} else {
    console.log("Command not found. Use 'add', 'list', or 'remove'.");
}