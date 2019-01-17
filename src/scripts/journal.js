let allJournalEntries = [];


const objectsJournalEntry = {
    date: "11Jan18",
    concepts: "JS Object Basics",
    entry: "Learned what an object is and how it's structured. Setting and accessing values using dot notation and square bracket notation.",
    mood: "happy"
};

const functionsJournalEntry = {
    date: "14Jan18",
    concepts: "JS Function Practice",
    entry: "Did many practice exercises with functions. Pure and impure functions. ChickenMonkey.",
    mood: "I've got this!"
};

const buildingComponentsJournalEntry = {
    date: "16Jan18",
    concepts: "Building DOM Components",
    entry: "Used vanilla JS to build DOM components. Learned about rest operators. Created generic functions that can be used to construct all kinds of new DOM elements. Learned to use DOM fragments. Rest operators were harder to understand, as they didn't appear as readable.",
    mood: "blerg."
};

allJournalEntries.push(objectsJournalEntry);
allJournalEntries.push(functionsJournalEntry);
allJournalEntries.push(buildingComponentsJournalEntry);


console.log(allJournalEntries);