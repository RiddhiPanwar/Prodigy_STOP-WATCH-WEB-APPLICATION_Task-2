let timerInterval;
let startTime;
let running = false;
let lapCounter = 1;

function startStop() {
  if (!running) {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTime, 10);
    document.getElementById("startStopBtn").innerHTML = "Stop";
    running = true;
  } else {
    clearInterval(timerInterval);
    document.getElementById("startStopBtn").innerHTML = "Start";
    running = false;
  }
}

function lapReset() {
  if (running) {
    let lapTime = new Date().getTime() - startTime;
    let formattedTime = formatTime(lapTime);
    let lapItem = document.createElement("li");
    lapItem.innerHTML = `Lap ${lapCounter}: ${formattedTime}`;
    document.getElementById("lapList").appendChild(lapItem);
    lapCounter++;
  } else {
    document.getElementById("stopwatch").innerHTML = "00:00:00";
    lapCounter = 1;
    document.getElementById("lapList").innerHTML = "";
  }
}

function updateTime() {
  let currentTime = new Date().getTime();
  let elapsedTime = currentTime - startTime;
  let formattedTime = formatTime(elapsedTime);
  document.getElementById("stopwatch").innerHTML = formattedTime;
}

function formatTime(time) {
  let hours = Math.floor(time / (1000 * 60 * 60));
  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((time % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((time % 1000) / 10);

  hours = padTime(hours);
  minutes = padTime(minutes);
  seconds = padTime(seconds);
  milliseconds = padTime(milliseconds);

  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function padTime(time) {
  return (time < 10 ? '0' : '') + time;
}
