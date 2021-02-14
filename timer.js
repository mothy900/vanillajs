const timerContainer = document.querySelector(".js-timer"),
  timerMin = timerContainer.querySelector(".timer-min"),
  timerSec = timerContainer.querySelector(".timer-sec"),
  timerBtn = timerContainer.querySelector(".js-timer-start"),
  timerDot = timerContainer.querySelector(".timer-dot"),
  timerMinPlace = document.getElementsByName("timer-min"),
  timerSecPlace = document.getElementsByName("timer-sec"),
  timerIcon = document.querySelector(".js-timer-icon");

let timer_min;
let timer_sec;
let timerVar;
function timerHide() {
  timerContainer.style.visibility = "hidden";
  timerIcon.addEventListener("click", timerShow);
  timerIcon.addEventListener("click", timerHide);

}

function timerShow() {

  timerContainer.style.visibility = "visible";
  timerIcon.removeEventListener("click", timerShow);
  timerIcon.addEventListener("click", timerHide);
}

function stopTimer() {
  clearInterval(timerVar);
  timerBtn.addEventListener("click", startTimer);
  timerBtn.innerText = ("시작!");
}
function startTimer() {
  timerVar = setInterval(getTimer, 1000);
  console.log("start");
  timerBtn.removeEventListener("click", startTimer);
  timerBtn.addEventListener("click", stopTimer);
  timerBtn.innerText = ("정지!");
}

function getTimer() {

  timer_min = parseInt(timerMin.value);
  timer_sec = parseInt(timerSec.value);

  /* timer 값을 못 받아 왔을 때 0으로 바꿔 준다. */
  if (!timer_min) {
    console.log(timer_min);
    timer_min = 0;
  }
  if (!timer_sec) {
    timer_sec = 0;
  }


  if (timer_sec != 0) {
    timer_sec = (timer_sec - 1);

    /** 타이머  */
    timerSecPlace[0].value = `${timer_sec}`;


    if (timer_sec == 0 && timer_min == 0) {
      alert("Time OVER!!!!");
      clearInterval(timerVar);
    }

  } else if (timer_sec == 0) {
    if (timer_min == 0) {
      alert("Time OVER!!!!");
      clearInterval(timerVar);
    } else {
      timer_min = timer_min - 1;
      timer_sec = timer_sec = 59;
      timerSecPlace[0].value = `${timer_sec}`;
      timerMinPlace[0].value = `${timer_min}`;
    }
  }

}
function init() {
  timerBtn.addEventListener("click", startTimer);
  timerIcon.addEventListener("click", timerShow);
}
init();
