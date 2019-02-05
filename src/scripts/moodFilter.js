// Event listener on mood filter buttons

moodFilter.addEventListener("click", (event) => {
    if (event.target.name === "moodButton"){
        let selectedMood = event.target.id;
        journalSection.innerHTML = "";

    getAllEntries()
        .then(myParsedEntries => {
            myParsedEntries.filter((entry) => entry.mood === selectedMood)
                .forEach((entry) => {
                    let html = entryBuilder(entry);
                    printEntry(html);
                });
            })
        }
})