// ** DATE AND TIME

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
    "Января",
    "Февраля",
    "Март",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  let nowDate = new Date();
  let day = nowDate.getDay();
  let mounth = nowDate.getMonth();

  date.innerHTML = days[day] + ", " + day + " " + mounths[mounth];
};

displayDate();

// ******************************************
// *****ПРИВЕТСТВИЕ********

const displayGreeting = () => {
  const greeting = document.querySelector(".greeting");
  const name = document.querySelector(".name");
  name.placeholder = "[Enter your name]";

  let nowTime = new Date();
  let currentHour = nowTime.getHours();
  //   let minutes = nowTime.getMinutes();
  let greetingText = "";
  console.log(currentHour);

  if (currentHour >= 6 && currentHour < 12) {
    greetingText = "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingText = "Good day";
  } else if (currentHour >= 18 && currentHour <= 23) {
    greetingText = "Good evening";
  } else {
    greetingText = "Good night";
  }
  greeting.innerHTML = greetingText;
};

displayGreeting();

// ******************************************
// ******************************************

// текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь)
// с 6:00 до 11:59 - Good morning / Доброе утро / Добрай раніцы
// с 12:00 до 17:59 - Good day / Добрый день / Добры дзень
// с 18:00 до 23:59 - Good evening / Добрый вечер / Добры вечар
// с 00:00 до 5:59 - Good night / Доброй/Спокойной ночи / Дабранач
