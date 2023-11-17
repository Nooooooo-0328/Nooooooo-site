document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;
    var loaderWrapper = document.querySelector(".loader-wrapper");

    setTimeout(function () {
        fadeOutLoader();
        showWelcomeMessage();
    }, 5000);

    function fadeOutLoader() {
        loaderWrapper.style.opacity = 0;
        setTimeout(function () {
            loaderWrapper.style.display = "none";
            body.classList.remove("loading");
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