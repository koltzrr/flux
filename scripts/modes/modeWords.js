export function displayWords(text, speed, updateText) {
    const words = text.split(/\s+/);
    let index = 0;

    const interval = setInterval(() => {
        if (index >= words.length) {
            clearInterval(interval);
            return;
        }
        updateText(words[index]);
        index++;
    }, speed);
}
