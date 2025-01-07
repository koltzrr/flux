import { displayWords } from './modes/modeWords.js';
import { displaySyllables } from './modes/modeSyllables.js';
import { displayPhrases } from './modes/modePhrases.js';
import { SpeedControl } from './speedControl.js';

const primaryText = document.getElementById("primary-text");
const secondaryText = document.getElementById("secondary-text");
const speedIndicator = document.getElementById("speed-indicator");

const speedControl = SpeedControl();
let currentMode = "words";

document.getElementById("add-file").addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".txt";
    input.style.display = "none";

    input.addEventListener("change", async (event) => {
        const file = event.target.files[0];
        if (file) {
            const text = await file.text();
            startDisplay(text);
        }
    });

    document.body.appendChild(input);
    input.click();
    input.remove();
});

function startDisplay(text) {
    if (currentMode === "words") {
        displayWords(text, speedControl.getSpeed(), updateText);
    } else if (currentMode === "syllables") {
        displaySyllables(text, speedControl.getSpeed(), updateText, updateSecondary);
    } else if (currentMode === "phrases") {
        displayPhrases(text, speedControl.getSpeed(), updateText);
    }
}

function updateText(content) {
    primaryText.textContent = content;
    primaryText.style.opacity = 1;
    setTimeout(() => (primaryText.style.opacity = 0), speedControl.getSpeed() - 1000);
}

function updateSecondary(content) {
    secondaryText.textContent = content;
    secondaryText.style.opacity = 1;
    setTimeout(() => (secondaryText.style.opacity = 0), speedControl.getSpeed());
}

document.getElementById("increase-speed").addEventListener("click", () => {
    speedControl.increaseSpeed();
    updateSpeedIndicator();
});

document.getElementById("decrease-speed").addEventListener("click", () => {
    speedControl.decreaseSpeed();
    updateSpeedIndicator();
});

function updateSpeedIndicator() {
    speedIndicator.textContent = `${speedControl.getSpeed() / 1000}x`;
}
