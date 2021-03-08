const displayDown = document.querySelector(".down-display-js"),
    toDoAfter = document.querySelector(".todo-after");

let dragged;
const TODOAFTER_LS = "afterToDos";
let afterToDos = [];
let idVar;


function saveAfterToDos() {
    localStorage.setItem(TODOAFTER_LS, JSON.stringify(afterToDos));

}
function todoDrop(event) {
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "todo-after") {
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
        event.target.style.opacity = "";

        // 박스안에 있는 리스트를 배열에 담기

        console.log("move text : ", toDos[idVar - 1].text);
        const newId = afterToDos.length + 1;
        const afterToDoObj = {
            text: toDos[idVar - 1].text,
            id: newId,
        };
        afterToDos.push(afterToDoObj);


        console.log("log : ", afterToDos[afterToDos.length - 1]);
        saveAfterToDos();
        //const afterText = afterToDos[afterToDos.length - 1].text;


        // afterToDos 배열에 추가한 요소는 toDos에서 제거하기
        console.log("obj : ", toDos[idVar - 1].text);

        const cleanToDos = toDos.filter(function (toDo) {


            return toDo.id !== parseInt(idVar);
        });
        console.log("cleanToDos : ", cleanToDos)
        toDos = cleanToDos;
        localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
        // 
    }
    //after에 추가하기 



    //드래그앤 드랍으로 기존의 toDo 배열에서 지움 -> 미완성

}

function todoDragLeave(event) {
    if (event.target.className == "todo-after") {
        event.target.style.background = "";
        event.target.style.opacity = "";
    }
}
function todoDragEnter(event) {
    if (event.target.className == "todo-after") {
        event.target.style.background = "#8492A0";
        event.target.style.opacity = "0.3";

    }
}
function todoDragOver(event) {
    event.preventDefault();

}

function todoDragEnd(event) {
    event.target.style.opacity = "";


}
function todoDragstart(event) {
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
    idVar = dragged.id;
    console.log("idVar : ", idVar);
}

function paintAfterToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("Button");
    const span = document.createElement("span");
    const newId = afterToDos.length + 1;

    delBtn.innerText = "×";
    delBtn.addEventListener("click", deleteToDo);//delete 추가
    span.innerText = text;
    li.appendChild(span);
    //li.appendChild(addBtn);
    li.appendChild(delBtn);
    li.draggable = true;
    li.id = newId;
    li.className = `list list-${newId}`;
    toDoAfter.appendChild(li);
    const afterToDoObj = {
        text: text,
        id: newId,
    };
    afterToDos.push(afterToDoObj);
    console.log("afterToDos.length : ", afterToDos.length);
    console.log("afterToDos.length : ", afterToDos);
    saveAfterToDos();

}
function loadAfterTodos() {


    const loadAfterToDos = localStorage.getItem(TODOAFTER_LS);
    console.log(loadAfterToDos, "load");
    if (loadAfterToDos !== null) {
        const parsedAfterToDos = JSON.parse(loadAfterToDos);
        parsedAfterToDos.forEach(function (afterToDo) {
            paintAfterToDo(afterToDo.text);
        });
    }
}


function init() {
    displayDown.addEventListener("drag", function (event) {

    }, false);

    displayDown.addEventListener("dragstart", todoDragstart, false);
    displayDown.addEventListener("dragend", todoDragEnd, false);
    displayDown.addEventListener("dragover", todoDragOver, false);
    displayDown.addEventListener("dragenter", todoDragEnter, false);
    displayDown.addEventListener("dragleave", todoDragLeave, false);
    displayDown.addEventListener("drop", todoDrop, false);
    loadAfterTodos();

}

init();

