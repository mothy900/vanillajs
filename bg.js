const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
  const image = new Image();
  //image.src = `images/${imgNumber + 1}.jpg`;
  //image.src = `images/7.jpeg`;
  image.src = `https://i.pinimg.com/originals/ce/d6/36/ced636d0c6ded839fab4f993ef174dfb.jpg`;
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
