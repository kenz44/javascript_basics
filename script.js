// add a new task.
let new_task = document.getElementById("new-task");

// add button
let addButton = document.getElementsByTagName("button")[0];

// ul of incomplete-tasks
let incompleteTask = document.getElementById("incomplete-tasks");

// completed-tasks
let completedTasks = document.getElementById("completed-tasks");


/*
 function to create a new task
 */
let createNewTaskElement = function (taskString) {

    let list = document.createElement("li");
    let checkBox = document.createElement("input");
    let label = document.createElement("label");
    let edit = document.createElement("input");
    let e_Button = document.createElement("button");
    let d_Button = document.createElement("button");

    label.innerText = taskString;

    checkBox.type = "checkbox";
    edit.type = "text";

    e_Button.innerText = "Edit";
    e_Button.className = "edit";
    d_Button.innerText = "Delete";
    d_Button.className = "delete";

    // appending
    list.appendChild(checkBox);
    list.appendChild(label);
    list.appendChild(edit);
    list.appendChild(e_Button);
    list.appendChild(d_Button);
    return list;
}

/*
    add a task
 */
let addTask = function () {
    console.log("Add Task...");

    let list = createNewTaskElement(new_task.value);

    if (new_task.value == "") {
        return;
    }

    incompleteTask.appendChild(list);
    bindTaskEvents(list, taskCompleted);

    new_task.value = "";
}

/*
    edit a task
 */
let editTask = function () {
    console.log("Edit Task...");
    console.log("Change 'edit' to 'save'");


    let list = this.parentNode;

    let edit = list.querySelector('input[type=text]');
    let label = list.querySelector("label");
    let containsClass = list.classList.contains("editMode");
    
    if (containsClass) {
        label.innerText = edit.value;
    } else {
        edit.value = label.innerText;
    }
    list.classList.toggle("editMode");
}

/*
    delete a task
 */
let deleteTask = function () {
    console.log("Delete Task...");

    let list = this.parentNode;
    let ul = list.parentNode;
    
    // Remove the parent from the ul
    ul.removeChild(list);

}

/*
    mark task as complete
 */
let taskCompleted = function () {
    console.log("Complete Task...");

    let list = this.parentNode;
    completedTasks.appendChild(list);
    bindTaskEvents(list, taskIncomplete);

}

/*
    mark task as incomplete
 */
let taskIncomplete = function () {
    console.log("Incomplete Task...");
    
    let list = this.parentNode;
    incompleteTask.appendChild(list);
    bindTaskEvents(list, taskCompleted);
}


addButton.onclick = addTask;
addButton.addEventListener("click", addTask);

let bindTaskEvents = function (taskList, checkBoxEventHandler) {
    console.log("bind list item events");
    
    let checkBox = taskList.querySelector("input[type=checkbox]");
    let e_Button = taskList.querySelector("button.edit");
    let d_Button = taskList.querySelector("button.delete");


    // bind editTask to edit button
    e_Button.onclick = editTask;
    // bind deleteTask to delete button
    d_Button.onclick = deleteTask;
    // bind taskCompleted to checkBox
    checkBox.onchange = checkBoxEventHandler;
}

for (let i = 0; i < incompleteTask.children.length; i++) {

    // bind events to list items
    bindTaskEvents(incompleteTask.children[i], taskCompleted);
}

for (let i = 0; i < completedTasks.children.length; i++) {
    // bind events to list items
    bindTaskEvents(completedTasks.children[i], taskIncomplete);
}

