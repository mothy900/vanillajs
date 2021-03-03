const displayDown = document.querySelector(".down-display-js");

let dragged;
const TODOAFTER_LS = "afterToDos";
let afterToDos = [];

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

        // 드래그앤 드랍으로 after에 추가해야함



        //드래그앤 드랍으로 기존의 toDo 배열에서 지움
        const cleanToDos = toDos.filter(function (toDo) {
            const target_id = displayDown.querySelector(`.list`);
            const event_id = event.path[0];
            afterToDos = toDos[event_id.id];
            //console.log("event1 : ", event_id);
            //console.log("event2 : ", target_id.id);
            //console.log("todo.id : ", toDos);

            return toDo.id !== parseInt();
        });
        toDos = cleanToDos;
        localStorage.setItem("toDos", JSON.stringify(toDos));

        saveToDos();

    }
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

function addArray(text) {
    const newId = afterToDos.length + 1;//lenth가 왜 문제?

    const afterToDosObj = {
        text: text,
        id: newId,
    };
    afterToDos.push(afterToDosObj);
    console.log("target : ", event.target);

}
function todoDragEnd(event) {
    event.target.style.opacity = "";
    const target_todo_id = displayDown.querySelector(".list");
    const text = toDos[target_todo_id.id].text;
    console.log(text);

    addArray(text);
    // afterToDos 배열에 추가하기

}
function todoDragstart(event) {
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;



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
    console.log(toDos);

}

init();

