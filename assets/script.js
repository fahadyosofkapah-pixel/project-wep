  const task = document.getElementById("task");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskContainer = document.getElementById("tasks-container");
    addTaskBtn.addEventListener("click",() => {
        const todoWrapper = document.createElement("div");
        const deleteButton = document.createElement("button");
        const taskText = document.createElement("p");
        todoWrapper.classList.add("todo-container");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "DELETE";
        taskText.classList.add("task-text");
        taskText.textContent = task.value;
        todoWrapper.append(taskText);
        todoWrapper.append(deleteButton);
        taskContainer.append(todoWrapper);
         deleteButton.addEventListener("click",() =>{
            todoWrapper.remove();
         })
        task.value = ""
     });