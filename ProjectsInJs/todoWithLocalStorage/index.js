// Todo App with Local Storage
// Objective: Create a functional todo list that persists data using browser's localStorage

// DOMContentLoaded event - Ensures DOM is fully loaded before executing code
// This prevents errors from trying to access elements that don't exist yet
document.addEventListener('DOMContentLoaded',()=>{
    // Get references to DOM elements
    let addBtn = document.getElementById("add-task-btn")
    let input = document.getElementById("todo-input")
    let list = document.getElementById("todo-list")

    // Load tasks from localStorage (or initialize as empty array if no tasks exist)
    // localStorage.getItem() retrieves data stored in browser
    // JSON.parse() converts JSON string back to JavaScript object
    // || [] provides default empty array if no tasks exist
    let task = JSON.parse(localStorage.getItem('task')) || [];

    // Render all existing tasks when page loads
    // forEach loops through each task and calls renderTask for each
    task.forEach((t) =>renderTask(t))

    // Add event listener to the add button
    addBtn.addEventListener('click',()=>{
        // Get the input value and remove whitespace from both ends
        let textValue = input.value.trim()
        // If input is empty, stop execution
        if (textValue === "")return;

        // Create a new task object with unique ID and status
        const newTask = {
            id: Date.now(),  // Unique ID using current timestamp
            text: textValue,  // The task description
            completed: false  // Initial completed status
        }

        // Add new task to the task array
        task.push(newTask);
        // Save updated tasks to localStorage
        saveTask()
        // Display the new task in the UI
        renderTask(newTask);
        // Clear the input field for next entry
        input.value = "";
        console.log(task)
    })

    // Function to render a task in the UI
    function renderTask(t){
        // Create a new list item element
        const li = document.createElement('li')
        // Set the data-id attribute for later reference
        li.setAttribute("data-id", t.id);
        // Add CSS class for styling
        li.className = "todo-item";
        // If task is completed, add the completed class for styling
        if (t.completed) li.classList.add("completed");
        
        // Set the inner HTML with task content and controls
        li.innerHTML = `
            <div class="todo-content">
                <input 
                    type="checkbox" 
                    class="todo-checkbox" 
                    ${t.completed ? 'checked' : ''}
                    onchange="toggleTask(${t.id})"
                />
                <span class="todo-text">${t.text}</span>
            </div>
            <div class="todo-actions">
                <button class="delete-btn" onclick="deleteTask(${t.id})">Delete</button>
            </div>
        `

        // Add the rendered task to the list
        list.append(li);
    }

    // Function to delete a task
    function deleteTask(id){
        // Filter array to remove task with matching id
        // filter() returns new array without the deleted task
        task = task.filter(t => t.id !== id);
        // Save changes to localStorage
        saveTask();
        // Clear the list and re-render all tasks
        list.innerHTML = '';
        task.forEach((t) => renderTask(t));
    }

    // Function to toggle task completion status
    function toggleTask(id){
        // Find the task with matching id
        const taskItem = task.find(t => t.id === id);
        // If task found, toggle its completed status
        if(taskItem){
            taskItem.completed = !taskItem.completed;
            // Save updated tasks
            saveTask();
            // Re-render all tasks to show updated status
            list.innerHTML = '';
            task.forEach((t) => renderTask(t));
        }
    }

    // Function to save tasks to localStorage
    function saveTask(){
        // JSON.stringify() converts JavaScript object to JSON string
        // localStorage.setItem(key, value) stores data in browser
        localStorage.setItem('task', JSON.stringify(task))
    }
})