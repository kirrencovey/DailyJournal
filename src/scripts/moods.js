// Dynamically populate mood drop-down menu

const moodOptions = ["🐐🐐🐐", "happy 😊", "meh. 🤷‍♀️", "😒 blerg.", "🤔 confused", "dejected 😩", "sad 😭", "I've got this! 🙌", "confused but excited!"];

moodOptions.forEach(mood => {
    moods.innerHTML += `<option value="${mood}">${mood}</option>`;
});


// Dynamically populate mood radio buttons

moodOptions.forEach(mood => {
    moodFilter.innerHTML += `
        <div class="mood__button">
            <input type="radio" name="moodButton" id="${mood}">
            <label for="txt">${mood}</label>
        </div>
    `
})