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