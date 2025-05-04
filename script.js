const form = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskTime = document.getElementById("task-time");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const taskText = taskInput.value;
  const timeValue = taskTime.value;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText} ${timeValue ? ' - ' + new Date(timeValue).toLocaleString() : ''}</span>
    <div>
      <button onclick="editTask(this)">Edit</button>
      <button onclick="completeTask(this)">✔</button>
      <button onclick="deleteTask(this)">✖</button>
    </div>
  `;
  taskList.appendChild(li);

  taskInput.value = "";
  taskTime.value = "";
});

function completeTask(button) {
  button.parentElement.parentElement.style.textDecoration = "line-through";
}

function deleteTask(button) {
  button.parentElement.parentElement.remove();
}

function editTask(button) {
  const taskItem = button.parentElement.parentElement;
  const text = taskItem.querySelector("span").innerText.split(" - ")[0];
  taskInput.value = text;
  deleteTask(button); // remove old one to replace with new
}
