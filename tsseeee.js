window.onload = function() {
  var spoiler = document.querySelector('[id*="spoiler_text"], #spoiler_text');
  var button = document.querySelector('[id*="spoiler_button"], #spoiler_button');

  if (!button || !spoiler) {
    console.log('spoiler not found');
    return;
  }

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
