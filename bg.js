const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
  const image = new Image();
  //image.src = `images/${imgNumber + 1}.jpg`;
  //image.src = `images/7.jpeg`;
  image.src = `https://mblogthumb-phinf.pstatic.net/MjAxNjEyMTVfMjUz/MDAxNDgxNzgwMDYxOTE2.fDHVLozvIM-D4xtPyRIYbYjO4TDgQSlURGYz0gRXgPAg.xav4kLsFoefqDC5p9YMldx80rqAucZvmmTFJqadJO-Ag.JPEG.wjs7889/DoKeBi.E04.161210.mp4_20161214_021752.676.jpg?type=w2`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
console.log("BackGround");
