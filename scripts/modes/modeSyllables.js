export function displaySyllables(text, speed, updateText, updateSecondary) {
    const words = text.split(/\s+/);
    let wordIndex = 0;
    let syllableIndex = 0;

    const interval = setInterval(() => {
        if (wordIndex >= words.length) {
            clearInterval(interval);
            return;
        }

        const syllables = words[wordIndex].split("-");
        updateSecondary(words[wordIndex]);

        if (syllableIndex < syllables.length) {
            updateText(syllables[syllableIndex]);
            syllableIndex++;
        } else {
            syllableIndex = 0;
            wordIndex++;
        }
    }, speed);
}
