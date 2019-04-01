const API_KEY = 'e6be6ad793a1c6ac9a2d0de7dacd7ea8';
const COORDS_LS = 'coords';
const weather = document.querySelector(".weather");
const temper = document.querySelector(".temperature");

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}

function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const city = json.name;
      const temp = json.main.temp;
      const weatherStr = json.weather[0].main;

      weather.innerText = `${city}, ${weatherStr}`;
      temper.innerText = `${temp}℃`;
    })
}

function handleGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const coordsObj = {
    latitude: lat,
    longitude: lon
  };

  saveCoords(coordsObj);
  getWeather(lat, lon);
}

function handleGeoFail(position) {
  console.log('Permission Denied');
}

function getCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFail);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS_LS);

  if (loadedCoords === null) getCoords();
  else {
    const parsedCoords = JSON.parse(loadedCoords);
    const lat = parsedCoords.latitude;
    const lon = parsedCoords.longitude;

    getWeather(lat, lon);
  }

}

function init() {
  loadCoords();
}

init();

/* 날씨 정보를 api에서 받아오기
  openweathermap.org
  1. 브라우저에서 위도, 경도 정보 받기
  2. 받아온 위도, 경도 정보를 LocalStorage 에 저장하기
  3. loadCoords 함수 구현
  4. 위도랑 경도값을 인자로 줘서 api 요청 -> response 파싱
*/