const displayEndTime = document.querySelector('.display__end-time');
const displayTimeLeft = document.querySelector('.display__time-left');
const timerBtns = document.querySelectorAll('.timer__button');
let timerDuration = 100;

function startTimer(seconds) {
    const startTime = Date.now();
    const endTime = startTime + (seconds * 100);
    let timeLeft = seconds;
    let date = new Date();
    date.setTime(endTime);
    console.log(date);
    endTime.setTime(startTime + durationMilli);
    console.log(startTime, endTime.getMinutes());
    let currentMin = ('0' + endTime.getMinutes()).slice(-2);
    displayEndTime.textContent = `Be back at ${endTime.getHours()}:${currentMin}`;

    let decreaseCounter = window.setInterval(function() {
        timeLeft -= 1;
        let minsLeft = Math.floor(timeLeft / 60);
        let secsLeft = ('0' + timeLeft % 60).slice(-2);
        displayTimeLeft.textContent = minsLeft + ':' + secsLeft;

        if(timeLeft === 0) {
            window.clearInterval(decreaseCounter);
            displayTimeLeft.textContent = 'Done!';
            displayEndTime.textContent = 'Your break is finished';
        }
    }, 1000);
}

startTimer(timerDuration);

timerBtns.forEach(function(btn) {
    btn.addEventListener('click', startTimer);
});

// determine length of break in minutes
// start count down
// get current time
// determine time after break ends based on current time and break length
// be able to start over length of break in minutes by clicking another button

