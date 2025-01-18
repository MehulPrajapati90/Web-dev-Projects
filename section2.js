// section 2 id's first evaluator.
const calculateButton = document.getElementById('section-two-calculateButton');
const progressCircle = document.getElementById('section-two-progressCircle'); 
const progressText = document.getElementById('section-two-progressText');
const cont = document.getElementById('section-two-container-one');

// section 2 id's second evaluator.
const taskInput = document.getElementById('section-two-taskInput-two');
const addTaskBtn = document.getElementById('section-two-addTaskBtn-two');
const taskList = document.getElementById('section-two-taskList-two');
const barChartContainer = document.getElementById('section-two-barChartContainer');
const percentageElem = document.getElementById('section-two-percentage-two');
const circularProgressTwo = document.getElementById('section-two-circularProgress-two');



// section 2 first evaluator.

calculateButton.addEventListener('click', () => {
  const distractions = parseInt(document.getElementById('distractions').value) || 0;
  const hoursWorked = parseInt(document.getElementById('hoursWorked').value) || 0;

  if (distractions > hoursWorked) {
    const extraMinutes = (distractions - hoursWorked) * 10;
    updateProgress(extraMinutes);
  }
  else if(distractions < hoursWorked){
    updateProgress(0);
    alert("you Can Take Rest.");
  }
  else if(distractions === hoursWorked && distractions!="" || hoursWorked != ""){
    updateProgress(60);
  }
  else{
    alert("Please enter the values.")
  }
});

function updateProgress(extraMinutes) {
  const maxMinutes = 500; // Assume maximum extra minutes for scaling the circle
  const progress = Math.min(extraMinutes, maxMinutes);
  const offset = 440 - (progress / maxMinutes) * 440;
  
  progressCircle.style.strokeDashoffset = offset;
  // progressText.style.color = "white";
  progressText.textContent = `${progress} min`;
}


// section 2 second evaluator.
let tasks = [];
let totalScore = 0;

// Add Task
addTaskBtn.addEventListener('click', () => {
  if(taskInput.value == ""){
    alert("Add Task First");
  }
  const taskName = taskInput.value.trim();
  if (taskName) {
    const task = { name: taskName, rating: 0 };
    tasks.push(task);
    taskInput.value = '';
    updateTasks();
    taskInput.focus(); // Auto-focus back on the input field
  }
});

// Update Task List
function updateTasks() {
  taskList.innerHTML = '';
  barChartContainer.innerHTML = '';
  totalScore = 0;
  
  
  let number = 0;
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${task.name}
      <div>
        <input type="number" min="0" max="10" value="${task.rating}" 
          onchange="updateRating(${index}, this.value)" 
          style="width: 50px; margin-right: 10px;">
        <button style = "color : white; background-color : #007bff;" onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    taskList.appendChild(li);

    totalScore += task.rating;

    // Update Bar Chart
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = '0'; // Start with height 0
    number += 1;
    bar.innerHTML = `task${number}`;
    barChartContainer.appendChild(bar);
    // Trigger the "growing" animation after a short delay
    setTimeout(() => {
      bar.style.height =`${task.rating * 10}%`; // Set final height dynamically
    }, 50);
  });
  
 
  updateCircularProgress();
}
// Update Rating
function updateRating(index, value) {
  tasks[index].rating = Math.min(Math.max(Number(value), 0), 10);
  updateTasks();
}

// Delete Task
function deleteTask(index) {
  tasks.splice(index, 1);
  updateTasks();
}

// Update Circular Progress Bar
function updateCircularProgress() {
  const maxScore = tasks.length * 10;
  const percentage = maxScore ? Math.round((totalScore / maxScore) * 100) : 0;
  percentageElem.textContent = `${percentage}%`;
  circularProgressTwo.style.background = `conic-gradient(#007bff ${percentage}%, #ddd ${percentage}%)`;
}
