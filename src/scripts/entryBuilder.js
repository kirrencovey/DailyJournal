// Build HTML representaiton of all entries and add to DOM


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


// Function retruns a fetch promise, .then() is a method used on a promise
getAllEntries()
    .then(myParsedEntries => {
        allEntries = myParsedEntries;
        myParsedEntries.forEach(entry => {
            let html = entryBuilder(entry);
            printEntry(html);
        });
    });


