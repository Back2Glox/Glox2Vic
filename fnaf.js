// Flashing Light Functionality
const flashButton = document.getElementById('flashToggle');
const body = document.body;

let isFlashing = false;

flashButton.addEventListener('click', () => {
    isFlashing = !isFlashing;
    if (isFlashing) {
        body.classList.add('flashing');
        flashButton.textContent = 'Stop Flashing';
    } else {
        body.classList.remove('flashing');
        flashButton.textContent = 'Start Flashing';
    }
});

// CSS class for flashing effect
const style = document.createElement('style');
style.textContent = `
    .flashing {
        animation: flash 0.5s infinite;
    }

    @keyframes flash {
        0% { background-color: rgba(0, 0, 0, 0.9); }
        50% { background-color: rgba(255, 0, 0, 0.9); }
        100% { background-color: rgba(0, 0, 0, 0.9); }
    }
`;
document.head.appendChild(style);
