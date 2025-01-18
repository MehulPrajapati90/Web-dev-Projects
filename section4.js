
// section 4.
const calendar = document.getElementById("calendar");
const eventModal = document.getElementById("eventModal");
const closeModal = document.querySelector(".close");
const eventForm = document.getElementById("eventForm");
const eventDate = document.getElementById("eventDate");
const eventText = document.getElementById("eventText");

let events = {}; // Stores events in a { date: [events] } format
let selectedDate = null;

// Close modal
closeModal.addEventListener("click", (e) => {
  eventModal.style.display = "none";
});

// Open modal
calendar.addEventListener("click", (e) => {
  if (e.target.classList.contains("day")) {
    selectedDate = e.target.dataset.date;
    eventDate.value = selectedDate;
    eventText.value = "";
    eventModal.style.display = "flex";
  } else if (e.target.classList.contains("event")) {
    selectedDate = e.target.parentElement.dataset.date;
    const eventIndex = e.target.dataset.index;
    eventText.value = events[selectedDate][eventIndex];
    eventModal.style.display = "flex";
  }
});

// Submit form
eventForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!events[selectedDate]) {
    events[selectedDate] = [];
  }

  if (!events[selectedDate].includes(eventText.value)) {
    events[selectedDate].push(eventText.value);
  }

  renderCalendar();
  eventModal.style.display = "none";
});

// Render calendar
function renderCalendar(){
  calendar.innerHTML = "";

  // Generate days (30 days for simplicity)
  for (let i = 1; i <= 30; i++) {
    const date = `2025-01-${String(i).padStart(2, "0")}`;
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    dayDiv.dataset.date = date;
    dayDiv.innerHTML = `<strong>${i}</strong>`;

    if (events[date]) {
      events[date].forEach((event, index) => {
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("event");
        eventDiv.dataset.index = index;
        eventDiv.textContent = event;
        dayDiv.appendChild(eventDiv);
      });
    }

    calendar.appendChild(dayDiv);
  }
}

// Initialize calendar
renderCalendar();