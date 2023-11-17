document.addEventListener("DOMContentLoaded", function () {
  var loader = document.querySelector(".loader");
  var percentageElement = document.querySelector(".percentage");
  setTimeout(function () {
      fadeOutLoader();
      showWelcomeMessage();
  }, 5000);

  function fadeOutLoader() {
      var loaderWrapper = document.querySelector(".loader-wrapper");
      loaderWrapper.style.opacity = 0;
      setTimeout(function () {
          loaderWrapper.style.display = "none";
      }, 500);
  }

  function showWelcomeMessage() {
      var welcomeMessage = document.createElement("div");
      welcomeMessage.className = "welcome-message";
      welcomeMessage.innerHTML = "Noooooooのホームページへようこそ!<br>Welcome to Noooooo homepage!";
      document.body.appendChild(welcomeMessage);
      setTimeout(function () {
          welcomeMessage.style.opacity = 1;
          setTimeout(function () {
              welcomeMessage.style.opacity = 0;
              setTimeout(function () {
                  welcomeMessage.parentNode.removeChild(welcomeMessage);
              }, 500);
          }, 2000);
      }, 100);
  }
});