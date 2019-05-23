const timerBtns = document.querySelector('.timer__controls');
const displayEndTime = document.querySelector('.display__end-time');
const displayTimeLeft = document.querySelector('.display__time-left');
let timerDuration = 3000;

function startTimer(duration) {
    const startTime = Date.now();
    const endTime = new Date();
    const durationMilli = duration * 100;
    endTime.setTime(startTime + durationMilli);
    displayTimeLeft.textContent = `${endTime.getMinutes()}:${endTime.getSeconds()}`;
    displayEndTime.textContent = `Be back at ${endTime.getHours()}:${endTime.getMinutes()}`;
}

startTimer(timerDuration);

// determine length of break in minutes
// start count down
// get current time
// determine time after break ends based on current time and break length
// be able to start over length of break in minutes by clicking another button

