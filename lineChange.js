




function todoDrop(event) {
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "todoList") {
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
        event.target.style.opacity = "";

        console.log(event);

    }

}

function todoDragLeave(event) {
    if (event.target.className == "list") {
        event.target.style.background = "";
        event.target.style.opacity = "";
    }
}
function todoDragEnter(event) {
    if (event.target.className == "list") {
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


function init() {
    todoList.addEventListener("drag", function (event) {

    }, false);

    todoList.addEventListener("dragstart", todoDragstart, false);
    todoList.addEventListener("dragend", todoDragEnd, false);
    todoList.addEventListener("dragover", todoDragOver, false);
    todoList.addEventListener("dragenter", todoDragEnter, false);
    todoList.addEventListener("dragleave", todoDragLeave, false);
    todoList.addEventListener("drop", todoDrop, false);


}

init();

