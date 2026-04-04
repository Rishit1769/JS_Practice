document.addEventListener('DOMContentLoaded',()=>{
    let addBtn = document.getElementById("add-task-btn")
let input = document.getElementById("todo-input")
let list = document.getElementById("todo-list")

let task = JSON.parse(localStorage.getItem('task')) || [];

task.forEach((t) =>renderTask(t))
addBtn.addEventListener('click',()=>{
    let textValue = input.value.trim()
    if (textValue === "")return;

    const newTask = {
        id: Date.now(),
        text: textValue,
        completed: false
    }

    task.push(newTask);
    saveTask()
    renderTask(newTask);
    input.value = "";  //clears the input
    console.log(task)
})

function renderTask(t){
    const li = document.createElement('li')
    li.setAttribute("data-id", t.id);
    li.className = "todo-item";
    if (t.completed) li.classList.add("completed");
    
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

    list.append(li);
}

function deleteTask(id){
    task = task.filter(t => t.id !== id);
    saveTask();
    list.innerHTML = '';
    task.forEach((t) => renderTask(t));
}

function toggleTask(id){
    const taskItem = task.find(t => t.id === id);
    if(taskItem){
        taskItem.completed = !taskItem.completed;
        saveTask();
        list.innerHTML = '';
        task.forEach((t) => renderTask(t));
    }
}

function saveTask(){
    localStorage.setItem('task', JSON.stringify(task))
}
})