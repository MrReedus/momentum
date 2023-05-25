const time = document.querySelector(".time");

console.log(time);

const displayTime = () => {
  let nowTime = new Date();
  let hours = nowTime.getHours();
  let minutes = nowTime.getMinutes();
  let seconds = nowTime.getSeconds();

  hours = addZeroNum(hours);
  minutes = addZeroNum(minutes);
  seconds = addZeroNum(seconds);

  time.innerHTML = hours + ":" + minutes + ":" + seconds;
};

const addZeroNum = (number) => {
  return number < 10 ? "0" + number : number;
};

setInterval(displayTime, 1000);
