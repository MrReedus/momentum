const time = document.querySelector(".time");
const date = document.querySelector(".date");

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

const displayDate = () => {
  let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  let mounths = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  let nowDate = new Date();

  let day = nowDate.getDay();

  let mounth = nowDate.getMonth();

  date.innerHTML = days[day] + ", " + mounths[mounth] + " " + day;
};

displayDate();

// let nowDate = new Date();
// let day = nowDate.getDate();
// let mounth = nowDate.getMonth();
// console.log(day);
