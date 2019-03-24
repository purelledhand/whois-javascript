const clockTitle = document.querySelector(".clock-title");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clockTitle.innerText = `${
    hours>12?`PM ${hours}`:`AM ${hours}`
  }:${
    minutes<10?`0${minutes}`:`${minutes}`
  }:${
    seconds<10?`0${seconds}`:`${seconds}`
  }
  `;
}

const test = (name) => {
  clockTitle.innerText= `name is ${name}`;
};


function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
