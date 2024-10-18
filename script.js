// Easter egg for index.html
document.getElementById('secretEgg').addEventListener('click', function() {
    document.getElementById('easterEgg').innerText = "Surprise! You're awesome, Victor!";
    document.getElementById('easterEgg').style.display = 'block';
});

// Easter egg for shadowchronicles.html
document.getElementById('shadowChronicleEgg').addEventListener('click', function() {
    document.getElementById('hiddenStory').innerText = "And so, the shadows revealed their true nature. Vanthar was never a kingdom of men, but a realm of forgotten gods...";
    document.getElementById('hiddenStory').style.display = 'block';
});

// Easter egg for fictionalnation.html
document.getElementById('avalonSecret').addEventListener('click', function() {
    document.getElementById('hiddenHistory').innerText = "Avalon was born from the ashes of an ancient empire. Its people rose from the dust and built a society that thrived on wisdom and power.";
    document.getElementById('hiddenHistory').style.display = 'block';
});

// Easter egg for written.html
document.getElementById('writingSecret').addEventListener('click', function() {
    document.getElementById('hiddenMessage').innerText
