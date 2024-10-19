document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton");
    var riseAgain = document.getElementById("riseAgain");
    var fallDown = document.getElementById("fallDown");

    // Start with Rise Again visible
    riseAgain.style.display = "block";
    riseAgain.classList.add("rise-animation");

    toggleButton.addEventListener("click", function() {
        if (toggleButton.textContent === "Fall") {
            // Hide Rise Again, show Fall Down
            riseAgain.style.display = "none";
            fallDown.style.display = "block";
            fallDown.classList.remove("rise-animation");
            fallDown.classList.add("fall-animation");
            toggleButton.textContent = "Rise";
        } else {
            // Hide Fall Down, show Rise Again
            fallDown.style.display = "none";
            riseAgain.style.display = "block";
            riseAgain.classList.remove("fall-animation");
            riseAgain.classList.add("rise-animation");
            toggleButton.textContent = "Fall";
        }
    });
});
