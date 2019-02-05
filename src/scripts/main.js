const $ = document.querySelector.bind(document);
const journalSection = $("#journal__section");
const saveButton = $("#journal__save");
const form = $("#journal__form");
const moods = $("#journal__mood");
const moodFilter = $("#mood__buttons")
let allEntries = [];

// Build HTML representation of journal entry
const entryBuilder = (entry) => {
    return `
    <div class="journal__entry">
        <section class="concepts">${entry.concepts}</section>
        <section class="date">${entry.date}</section>
        <section class="entry">${entry.entry}</section>
        <section class="mood">${entry.mood}</section>
    </div>
    `;
};

// Function to print HTML representation of entries to the DOM:
const printEntry = (entry) => {
    journalSection.innerHTML += entry;
};


// Function to get journal entries from local API
const getAllEntries = () => {
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
}

// Build HTML representaiton of all entries and add to DOM
// Function retruns a fetch promise, .then() is a method used on a promise
getAllEntries()
    .then(myParsedEntries => {
        allEntries = myParsedEntries;
        myParsedEntries.forEach(entry => {
            let html = entryBuilder(entry);
            printEntry(html);
        });
    });


// Event listener on save button that will add creation to json
saveButton.addEventListener("click", (event) => {

    // Select the user input values
    let date = document.querySelector("#journal__date").value;
    let concepts = document.querySelector("#journal__concepts").value;
    let entry = document.querySelector("#journal__entry").value;
    let mood = document.querySelector("#journal__mood").value;

    // Create new json object from user input
    let entryToSave = {
        date: date,
        concepts: concepts,
        entry: entry,
        mood: mood
    }

    // Post newly made object to json collection
    fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryToSave)
    })
    // Once this fetch has finished, post the new entry to DOM
        .then (r => r.json())
        .then (() => {
            let html = entryBuilder(entryToSave);
            printEntry(html)
            form.reset();
        })
});




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


// Event listener on mood filter buttons

moodFilter.addEventListener("click", (event) => {
    if (event.target.name === "moodButton"){
        let selectedMood = event.target.id;

        journalSection.innerHTML = "";

        allEntries.filter((entry) => entry.mood === selectedMood)
            .forEach((entry) => {
                let html = entryBuilder(entry);
                printEntry(html);
            });
    }
})