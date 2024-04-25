let timerInterval; // Global variable to store the timer interval ID

// Function to start the timer
function runTimer() {
    let startTime = Date.now(); // Get the current timestamp in milliseconds

    // Update the timer every second
    timerInterval = setInterval(() => {
        let elapsedTime = Date.now() - startTime; // Calculate elapsed time
        let seconds = Math.floor(elapsedTime / 1000); // Convert milliseconds to seconds

        // Display the elapsed time in the HTML
        document.getElementById("timer").textContent = formatTime(seconds);
    }, 1000); // Update every second
}

// Function to format time in mm:ss format
function formatTime(timeInSeconds) {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timerInterval); // Stop the timer interval
}
