const clockContainer = document.querySelector(".clock-container"),
  clockTitle = document.querySelector(".clock-title"),
  clockDesc = document.querySelector(".clock-desc");

function getTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clockTitle.innerText = `${year}.${month + 1}.${day}`;

  clockDesc.innerText = `${
    hours > 12 ? `PM ${hours - 12 < 10 ? `0${hours - 12}` : hours - 12}` : `AM ${
      hours - 12 < 10 ? `0${hours}` : hours}`}:${
    minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds}`;

}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
