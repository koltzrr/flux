export function displayPhrases(text, speed, updateText) {
    const phrases = text.split("-");
    let index = 0;

    const interval = setInterval(() => {
        if (index >= phrases.length) {
            clearInterval(interval);
            return;
        }
        updateText(phrases[index]);
        index++;
    }, speed);
}
