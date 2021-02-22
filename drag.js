const displayDown = document.querySelector(".down-display-js");
let dragged;
const TODOAFTER_LS = "afterToDos";
let afterToDos = [];

function todoDrop(event) {
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "todo-after") {
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
        event.target.style.opacity = "";
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
function todoDragEnd(event) {
    event.target.style.opacity = "";
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
}

init();

