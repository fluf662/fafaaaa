(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let today = new Date(),
      yyyy = today.getFullYear(),
      date = "05/15/" + yyyy;

  const countDown = new Date(date).getTime(),
        x = setInterval(function () {

          const now = new Date().getTime(),
                distance = countDown - now;

          document.getElementById("days").innerText = Math.floor(distance / day);
          document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
          document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
          document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

        }, 1000);
})();

// СПОЙЛЕР
var div = document.getElementById('spoiler_text');
var btn = document.getElementById('spoiler_button');

btn.onclick = function() {
  if (div.className === 'fadeout') {
    div.className = 'fadein';
    btn.innerHTML = 'скрыть';
  } else {
    div.className = 'fadeout';
    btn.innerHTML = 'узнать';
  }
};