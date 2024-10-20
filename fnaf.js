// JavaScript for FNaF Page

// Show jump scare image when button is clicked
document.getElementById("jump-scare-button").addEventListener("click", function() {
    const jumpScareContainer = document.getElementById("jump-scare-container");
    jumpScareContainer.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling

    // Hide jump scare after 3 seconds
    setTimeout(() => {
        jumpScareContainer.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable scrolling
    }, 3000);
});

// Easter egg button for fun
document.getElementById("easter-egg-button").addEventListener("click", function() {
    const easterEggMessage = document.createElement("div");
    easterEggMessage.textContent = "You've found an Easter Egg! 🎉";
    easterEggMessage.style.position = "fixed";
    easterEggMessage.style.top = "50%";
    easterEggMessage.style.left = "50%";
    easterEggMessage.style.transform = "translate(-50%, -50%)";
    easterEggMessage.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    easterEggMessage.style.color = "black";
    easterEggMessage.style.padding = "20px";
    easterEggMessage.style.border = "2px solid #f39c12";
    easterEggMessage.style.borderRadius = "10px";
    easterEggMessage.style.zIndex = "2000";
    document.body.appendChild(easterEggMessage);

    // Remove the message after 3 seconds
    setTimeout(() => {
        document.body.removeChild(easterEggMessage);
    }, 3000);
});

// Easter egg sound effect
const easterEggSound = new Audio('sounds/easter_egg_sound.mp3'); // Add your sound file here
easterEggButton.addEventListener("click", () => {
    easterEggSound.play();
});

// Handle jump scare image
const jumpScareImage = document.getElementById("jump-scare-image");
jumpScareImage.src = "jumpscare.png"; // Set your jump scare image here
