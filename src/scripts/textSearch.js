// Event listener on search bar

searchFilter.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        let searchTerm = event.target.value.toLowerCase();
        journalSection.innerHTML = "";

        getAllEntries()
            .then (myParsedEntries => {
                myParsedEntries.forEach(entry => {
                    for (const value of Object.values(entry)) {
                        if (isNaN(value)) {
                            if (value.toLowerCase().includes(searchTerm)) {
                                let html = entryBuilder(entry);
                                printEntry(html);
                                return;
                            }
                        }
                    }
                });
            })
    }
})



