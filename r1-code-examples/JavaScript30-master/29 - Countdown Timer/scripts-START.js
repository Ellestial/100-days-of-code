const displayEndTime = document.querySelector('.display__end-time');
const displayTimeLeft = document.querySelector('.display__time-left');
const timerBtns = document.querySelectorAll('.timer__button');
const form = document.querySelector('form');
const input = document.querySelector('input[name="minutes"]');
let decreaseCounter;

function startTimer(seconds) {
    window.clearInterval(decreaseCounter);
    const start = Date.now();
    const end = start + (seconds * 1000);
    // moved section below to own function
    // const endTime = new Date();
    // endTime.setTime(end);
    // const endHr = endTime.getHours();
    // const endMin = ('0' + endTime.getMinutes()).slice(-2);
    // displayEndTime.textContent = `Be back at ${endHr}:${endMin}`;
    showTimeLeft(seconds);
    showEndTime(end);

    decreaseCounter = window.setInterval(function() {
        const current = Date.now();
        const leftTime = Math.round((end - current) / 1000);
        showTimeLeft(leftTime);
        if(leftTime <= 0) {
            window.clearInterval(decreaseCounter);
        }
    }, 1000);
}

function showTimeLeft(seconds) {
    const leftMin = Math.floor(seconds / 60);
    const leftSec = ('0' + (seconds % 60)).slice(-2);
    const timerAmount = `${leftMin}:${leftSec}`;
    document.title = timerAmount;
    displayTimeLeft.textContent = timerAmount;
}

function showEndTime(timestamp) {
    const endTime = new Date(timestamp);
    // endTime.setTime(end); // can remove by adding the end parameter into the new Date above
    const endHr = endTime.getHours() > 12 ? endTime.getHours() - 12 : endTime.getHours();
    const endMin = ('0' + endTime.getMinutes()).slice(-2);
    displayEndTime.textContent = `Be back at ${endHr}:${endMin}`;
}

timerBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        startTimer(this.getAttribute('data-time'));
    });
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    startTimer(input.value * 60);
});