
// Get DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create <li>
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Buttons
    const btnGroup = document.createElement("div");

    // Toggle button
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "✓";
    toggleBtn.className = "btn btn-sm btn-outline-primary me-2";
    toggleBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "btn btn-sm btn-outline-dark me-2";
    editBtn.addEventListener("click", () => {
        const newTask = prompt("Edit your task:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            span.textContent = newTask;
        }
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-sm btn-outline-danger";
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    // Append buttons
    btnGroup.appendChild(toggleBtn);
    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);

    // Append span + buttons into li
    li.appendChild(span);
    li.appendChild(btnGroup);

    // Add li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
});





















