/**
 * Gestor de Tareas — lógica de la aplicación.
 *
 * Aplicación deliberadamente sencilla: el objetivo de este repositorio
 * es servir de base para practicar el flujo de trabajo con Git y GitHub,
 * no la lógica de negocio en sí.
 */

const STORAGE_KEY = "tareas";

let tasks = loadTasks();

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  addTask(text);
  input.value = "";
});

function loadTasks() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [
    { id: 1, text: "Clonar el repositorio", done: true },
    { id: 2, text: "Configurar .gitignore", done: false },
    { id: 3, text: "Crear mi rama de trabajo", done: false },
  ];
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function addTask(text) {
  const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
  tasks.push({ id, text, done: false });
  saveTasks();
  render();
}

function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) task.done = !task.done;
  saveTasks();
  render();
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks();
  render();
}

function render() {
  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "task-item" + (task.done ? " done" : "");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => toggleTask(task.id));

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Eliminar";
    deleteBtn.addEventListener("click", () => deleteTask(task.id));

    li.append(checkbox, span, deleteBtn);
    list.appendChild(li);
  });
}

render();
