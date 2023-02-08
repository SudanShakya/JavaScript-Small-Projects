const secondHand = document.querySelector('#sec-hand');
const minuteHand = document.querySelector('#min-hand');
const hourHand = document.querySelector('#hour-hand');

const digitalTime = document .querySelector('#digital-time');

function setDate() {
    const now = new Date();
    
    let seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    let minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    
    let hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // For digital clock
    let timeSuffix = "AM"; 
    if(hours > 12) {
        timeSuffix = "PM";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    const time = hours + ":" + minutes + ":" + seconds + " " + timeSuffix;

    digitalTime.innerText = time;
}

setInterval(setDate, 1000);