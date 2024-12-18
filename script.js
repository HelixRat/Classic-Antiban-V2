// DOM Elements
const interface1 = document.getElementById('interface-1');
const interface2 = document.getElementById('interface-2');
const startBtn = document.getElementById('start-btn');
const startTimerBtn = document.getElementById('start-timer');
const stopTimerBtn = document.getElementById('stop-timer');
const timerDisplay = document.getElementById('timer');

let isAntibanRunning = false;

// Event Listener: Switch to the second interface
startBtn.addEventListener('click', () => {
    interface1.classList.add('hidden'); // Hide the first interface
    interface2.classList.remove('hidden'); // Show the second interface
    timerDisplay.textContent = "Antiban is not running."; // Reset the timer message
});

// Event Listener: Start the Antiban
startTimerBtn.addEventListener('click', () => {
    if (!isAntibanRunning) {
        isAntibanRunning = true;
        timerDisplay.textContent = "Antiban started successfully!";
        timerDisplay.style.color = "#00ff7f"; // Green color for success
        startTimerBtn.classList.add('glow');
    }
});

// Event Listener: Stop the Antiban
stopTimerBtn.addEventListener('click', () => {
    if (isAntibanRunning) {
        isAntibanRunning = false;
        timerDisplay.textContent = "Antiban stopped.";
        timerDisplay.style.color = "#ff6347"; // Red color for stop
        startTimerBtn.classList.remove('glow');
        stopTimerBtn.classList.add('glow');
        setTimeout(() => stopTimerBtn.classList.remove('glow'), 2000); // Temporary glow
    }
});
