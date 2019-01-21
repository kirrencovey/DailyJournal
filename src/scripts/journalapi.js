const entryBuilder = (entry) => {    
    return `
    <div class="journal__entry">
        <h3>${entry.concepts}</h3>
        <h5>${entry.date}</h4>
        <p>${entry.entry}</p>
        <h4>Mood: ${entry.mood}</h4>
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