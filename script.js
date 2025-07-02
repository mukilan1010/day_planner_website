
document.getElementById("task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const taskInput = document.getElementById("task-input");
    const timeInput = document.getElementById("time-input");

    const taskText = taskInput.value.trim();
    const taskTime = timeInput.value;

    if (!taskText || !taskTime) return;

    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("div");
    taskItem.className = "task";

    const taskContent = document.createElement("span");
    taskContent.textContent = `${taskTime} - ${taskText}`;

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete";
    deleteBtn.onclick = () => taskItem.remove();

    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = "";
    timeInput.value = "";
});
