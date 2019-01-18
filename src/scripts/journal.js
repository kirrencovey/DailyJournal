// Create HTML structure for a journal entry

const makeJournalEntryComponent = (journalEntry) => { 
    return `
    <div class="journal__entry">
    <h3>Concepts Covered: ${journalEntry.concepts}</h3>
    <h5>${journalEntry.date}</h4>
    <p>${journalEntry.entry}</p>
    <h4>Mood: ${journalEntry.mood}</h4>
    </div>
    `
}


// Select section that will contain journal entries on the DOM

const journalSection = document.querySelector("#journal__section")

// Create HTML structure for each entry and add to the DOM

for (let entry of allJournalEntries) {
    let newEntry = makeJournalEntryComponent(entry)
    journalSection.innerHTML += newEntry
}






//use this as basis for building journal entries onto the DOM:

// const messagesFragment = document.createDocumentFragment();

// const makeMessage = (messageText) => {
//     let newMessage = document.createElement('section');
//     newMessage.className = "message";
//     newMessage.textContent = messageText;
//     messagesFragment.appendChild(newMessage);
// };

//makeMessage("Hi!!");

