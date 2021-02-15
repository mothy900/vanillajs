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

}

/** 소제목 만드는중 
 * li의 id를 받아와서 grid-row속성을 활용해 중간에 끼워 넣음
 * but 기존의 local storage에 있는 속성의 id를 수정해야 함
 */
function addToDo(event) {
  console.log("add");
  const div = document.createElement("div");
  const inputBox = document.createElement("input");
  const btn = event.target;
  const li = btn.parentNode;
  console.log(li);
  inputBox.placeholder = "input here";
  inputBox.className = "addBox";
  div.appendChild(inputBox);
  div.className = "list-addBox";
  div.style.gridRow = `${li.id}`;

  // inputbox 세로정렬하기 위해 
  todoList.appendChild(div);
  addEvent();

  div.removeAttribute("gridRow");
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
  //li.appendChild(addBtn);
  li.appendChild(delBtn);
  li.id = newId;
  li.className = `list list-${newId}`;
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
