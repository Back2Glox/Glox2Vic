// Preload sound effects
const hoverSound = new Audio('fnaf-sound.mp3');
const jumpscareSound = new Audio('jumpscare-sound.mp3');
const ambianceSound = new Audio('ambiance-sound.mp3');

// Play ambiance sound on page load
window.addEventListener('load', () => {
    ambianceSound.loop = true;
    ambianceSound.volume = 0.5;
    ambianceSound.play();
});

// Hover Sound Effect for Characters
const characters = document.querySelectorAll('.character');
characters.forEach(character => {
    character.addEventListener('mouseover', () => {
        hoverSound.play();
    });
    character.addEventListener('mouseout', () => {
        hoverSound.pause();
        hoverSound.currentTime = 0;
    });
});

// Click to Activate Jumpscare with Animation
characters.forEach(character => {
    character.addEventListener('click', () => {
        jumpscareSound.play();
        document.body.style.backgroundImage = "url('jumpscare.gif')";
        document.body.classList.add('shaking');
        
        setTimeout(() => {
            document.body.classList.remove('shaking');
            document.body.style.backgroundImage = "url('fnaf-background.jpg')";
        }, 1500); // Reset background after jumpscare
    });
});

// Add shaking animation to the body when jumpscare is activated
const shakingCSS = `
    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
    }
    .shaking {
        animation: shake 0.5s infinite;
    }
`;

// Append shaking animation to the page
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = shakingCSS;
document.head.appendChild(styleSheet);

// Flashing Lights Effect
let flashActive = false;
const flashBtn = document.createElement('button');
flashBtn.innerHTML = 'Toggle Flashing Lights';
flashBtn.style.position = 'fixed';
flashBtn.style.top = '20px';
flashBtn.style.right = '20px';
flashBtn.style.padding = '10px 20px';
flashBtn.style.fontSize = '1.2em';
flashBtn.style.zIndex = '9999';
document.body.appendChild(flashBtn);

flashBtn.addEventListener('click', () => {
    flashActive = !flashActive;
    if (flashActive) {
        startFlashing();
    } else {
        stopFlashing();
    }
});

let flashInterval;
function startFlashing() {
    flashInterval = setInterval(() => {
        document.body.style.backgroundColor = document.body.style.backgroundColor === 'black' ? 'white' : 'black';
    }, 100);
}

function stopFlashing() {
    clearInterval(flashInterval);
    document.body.style.backgroundColor = 'black';
}

// Character Appearance Change on Double Click
characters.forEach(character => {
    character.addEventListener('dblclick', () => {
        character.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            character.style.transform = 'rotate(0deg)';
        }, 500);
    });
});

// Secret Code Interaction (e.g. '1987' from FNaF Lore)
let secretCode = [];
window.addEventListener('keydown', (e) => {
    secretCode.push(e.key);
    secretCode = secretCode.slice(-4); // Only keep last 4 keys

    if (secretCode.join('') === '1987') {
        alert("You've unlocked the secret of 'The Bite of 87'!");
        jumpscareSound.play();
        document.body.style.backgroundImage = "url('secret-jumpscare.gif')";
        setTimeout(() => {
            document.body.style.backgroundImage = "url('fnaf-background.jpg')";
        }, 3000); // Reset background after secret
    }
});

// Random Character Movement
setInterval(() => {
    characters.forEach(character => {
        const randomX = Math.random() * (window.innerWidth - 200);
        const randomY = Math.random() * (window.innerHeight - 300);
        character.style.position = 'absolute';
        character.style.left = `${randomX}px`;
        character.style.top = `${randomY}px`;
    });
}, 10000); // Characters move every 10 seconds
