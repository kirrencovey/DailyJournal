// Function to get journal entries from local API
const getAllEntries = () => {
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
}