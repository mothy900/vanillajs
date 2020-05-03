const title = document.querySelector("#body");
const BODY_CLASS = "window-background";

function handleResize() {
  const length = window.outerWidth;
  console.log(length);
  if (length < 600) {
    title.className = "short";
  } else if (length < 1200) {
    title.className = "middle";
  } else {
    title.className = "long";
  }
}

function init() {
  window.addEventListener("resize", handleResize);
}

init();
