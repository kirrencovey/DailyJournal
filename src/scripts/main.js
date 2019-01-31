const journalSection = document.querySelector("#journal__section");
const saveButton = document.querySelector("#journal__save");


const entryBuilder = (entry) => {
    return `
    <div class="journal__entry">
        <section class="concepts">${entry.concepts}</section>
        <section class="date">${entry.date}</section>
        <section class="entry">${entry.entry}</section>
        <section class="mood">Mood: ${entry.mood}</section>
    </div>
    `;
};

// Print HTML representation of entries to the DOM:
const printEntry = (entryHTML) => {
    journalSection.innerHTML += entryHTML;
};

// Get journal entries from local API


// const printJournalEntries = () => {
    fetch("http://localhost:8088/entries")
        .then(response => response.json())
        .then(myParsedEntries => {
            myParsedEntries.forEach(entry => {

                // Produce HTML representation
                const entryHTML = entryBuilder(entry);

                // Add representaiton to DOM
                printEntry(entryHTML);
            });
        });
// }


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
    let newEntry = entryBuilder(entryToSave);
    printEntry(newEntry);

});