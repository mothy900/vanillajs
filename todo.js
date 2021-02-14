const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  todoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const SUBTODOS_LS = "subToDos"
let toDos = [];
let subToDos = [];

function paintSubToDos() {

}
function addEvent() {
  const addBtn = document.getElementsByClassName(".addBtnClass");
  console.log("add")
  addBtn.addEventListener("submit", paintSubToDos)
}
function addToDo() {
  console.log("add");
  const ls = document.createElement("ls");
  const inputBox = document.createElement("input");

  inputBox.placeholder = "input here";
  inputBox.className = "addBox";
  const addBox = document.querySelector("addBox");
  console.log(addBox);
  ls.appendChild(inputBox);
  todoList.appendChild(ls);

  addEvent();

}
function filterFn(toDo) {
  return toDo.id === 1;
}
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  todoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function saveSubToDos() {
  localStorage.setItem(SUBTODOS_LS, JSON.stringify(subToDos));
}
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("Button");
  const addBtn = document.createElement("Button");
  addBtn.className = "addBtnClass";
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  addBtn.innerText = "➡️";
  addBtn.addEventListener("click", addToDo);
  delBtn.innerText = "×";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(addBtn);
  li.appendChild(delBtn);
  li.id = newId;
  todoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);

  toDoInput.value = "";
}
function loadTodos() {
  const loadToDos = localStorage.getItem(TODOS_LS);
  if (loadToDos !== null) {
    const parsedToDos = JSON.parse(loadToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}
function init() {
  loadTodos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
