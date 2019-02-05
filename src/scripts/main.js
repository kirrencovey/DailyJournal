const $ = document.querySelector.bind(document);
const journalSection = $("#journal__section");
const saveButton = $("#journal__save");
const form = $("#journal__form");
const moods = $("#journal__mood");
const moodFilter = $("#mood__buttons")
const searchFilter = $("#search__filter");
let allEntries = [];