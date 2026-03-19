// таймер
(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  const countDown = new Date("May 15, 2026 00:00:00").getTime();

  setInterval(function () {

    const now = new Date().getTime(),
          distance = countDown - now;

    document.getElementById("days").innerText = Math.floor(distance / day);
    document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
    document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
    document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

  }, 1000);
})();

// кнопка
var div = document.getElementById('spoiler_text');
var btn = document.getElementById('spoiler_button');

btn.onclick = function() {

  if (div.classList.contains('fadeout')) {
    div.classList.remove('fadeout');
    div.classList.add('fadein');
    btn.innerHTML = 'Скрыть условия';
  } else {
    div.classList.remove('fadein');
    div.classList.add('fadeout');
    btn.innerHTML = 'Узнать условия';
  }

};