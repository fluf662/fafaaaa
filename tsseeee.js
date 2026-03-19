(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "04/30/",
      date = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > date) {
    date = dayMonth + nextYear;
  }

  const countDown = new Date(date).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / day);
        document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
        document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
        document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

        if (distance < 0) {
          document.getElementById("headline").innerText = "Акция завершена!";
          document.getElementById("countdown").style.display = "none";
          clearInterval(x);
        }
      }, 0);
}());

// СПОЙЛЕР — без классов, только style
window.onload = function() {
  var spoiler = document.getElementById('spoiler_text');
  var button = document.getElementById('spoiler_button');

  if (!button || !spoiler) return;

  spoiler.style.maxHeight = "0";
  spoiler.style.overflow = "hidden";
  spoiler.style.opacity = "0";
  spoiler.style.transition = "max-height 0.8s ease, opacity 0.8s ease";

  var isOpen = false;

  button.onclick = function () {
    if (isOpen) {
      spoiler.style.maxHeight = "0";
      spoiler.style.opacity = "0";
      button.innerHTML = "Узнать";
    } else {
      spoiler.style.maxHeight = "500px";
      spoiler.style.opacity = "1";
      button.innerHTML = "Скрыть";
    }
    isOpen = !isOpen;
  };
};
