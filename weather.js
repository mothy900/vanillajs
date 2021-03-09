const weather = document.querySelector(".js-weather");
const COORDS = "coords";
const API_KEY = "6466cb3da2db9af2954ddefbe3849f2a";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerHTML = `${temperature}°C <br> ${place}`;
    });
} //이해 안되면 유튜브 클론 듣자

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoError() {
  console.log("cant access geo info");
}
function handleGetSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGetSucces, handleGeoError);
  //location 을 일겅옴
}
function loadCoords() {
  console.log("city refresh");
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    //get weather
    const parseCoords = JSON.parse(loadedCoords);

    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
  setInterval(askForCoords, 300000);  //1000 = 1s 5분에 한번씩 reset
}

init();
