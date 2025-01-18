// section 3 Learning Entries.
// script.js

const entryDate = document.getElementById("entryDate");
const entryText = document.getElementById("entryText");
const saveEntry = document.getElementById("saveEntry");
const editEntry = document.getElementById("editEntry");
const status = document.getElementById("status");

// Object to store diary entries
let diaryEntries = {};

// Save an entry
saveEntry.addEventListener("click", () => {
  const date = entryDate.value;
  const text = entryText.value.trim();

  if (!date || !text) {
    status.textContent = "Please select a date and write something.";
    return;
  }

  diaryEntries[date] = text;
  entryText.disabled = true;
  saveEntry.disabled = true;
  editEntry.disabled = false;
  status.textContent = "Todays Learning's saved!";
});

// Edit an entry
editEntry.addEventListener("click", () => {
  entryText.disabled = false;
  saveEntry.disabled = false;
  editEntry.disabled = true;
  status.textContent = "You can now edit the entry's.";
});

// Load the entry for the selected date
entryDate.addEventListener("change", () => {
  const date = entryDate.value;

  if (diaryEntries[date]) {
    entryText.value = diaryEntries[date];
    entryText.disabled = true;
    saveEntry.disabled = true;
    editEntry.disabled = false;
    status.textContent = "your Learnings loaded!";
  } else {
    entryText.value = "";
    entryText.disabled = false;
    saveEntry.disabled = false;
    editEntry.disabled = true;
    status.textContent = "No entry for this date. Start writing!";
  }
});
