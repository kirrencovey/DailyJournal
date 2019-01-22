const entryBuilder = (entry) => {    
    return `
    <div class="journal__entry">
        <section class="concepts">${entry.concepts}</section>
        <section class="date">${entry.date}</section>
        <section class="entry">${entry.entry}</section>
        <section class="mood">Mood: ${entry.mood}</section>
    </div>
    `
}

const journalSection = document.querySelector("#journal__section");

// Print HTML representation of entries to the DOM:
const printEntry = (entryHTML) => {
    journalSection.innerHTML += entryHTML;
}   

// Get journal entries from local API
fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(myParsedEntries => {
        myParsedEntries.forEach(entry => {
                    
                    // Produce HTML representation
                    const entryHTML = entryBuilder(entry);

                    // Add representaiton to DOM
                    printEntry(entryHTML);
                })
        })