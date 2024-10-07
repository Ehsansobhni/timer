let hour = 0;
let minute = 0;
let second = 0;
let time;

let isStopped = false; // Add this line

function startTimer() {
    isStopped = false;
    document.getElementById("start").setAttribute("disabled","true");
    time = setInterval(() => { timer(); }, 1000);


}



function stopTimer() {
  if(isStopped) { // Add this condition
    return;
}
    isStopped = true; // Set isStopped to true when the timer is stopped
    document.getElementById("start").removeAttribute("disabled");
    clearInterval(time);
    lap(hour,minute,second);
}

function resetTimer() {
    stopTimer();
    hour = 0;
    minute = 0;
    second = 0;
    
    document.getElementById('hour').innerText = '00';
    document.getElementById('min').innerText = '00';
    document.getElementById('sec').innerText = '00';
}

function timer() {
    if(isStopped) { // Add this condition
        return;
    }

    second++;
    
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    if (hour == 24){
        resetTimer(); 
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('min').innerText = returnData(minute);
    document.getElementById('sec').innerText = returnData(second);
}

function returnData(input) {
    return input > 9 ? input : `0${input}`
}

function lap(h,m,s){
    // If all are zero, don't add a lap
    if(h === 0 && m === 0 && s === 0) {
        return;
    }

    const tableLap = document.querySelector("#laps");
    const timerDate = document.createElement("h2");
    const timerNode = document.createTextNode(returnData(h)+":"+ returnData(m)+":"+returnData(s));
    timerDate.appendChild(timerNode);
    tableLap.appendChild(timerDate);
=======
let isStopped = false;

function startTimer() {
  document.getElementById("start").setAttribute("disabled", "true");
  time = setInterval(() => {
    timer();
  }, 1000);
  isStopped = false;
}

function stopTimer() {
  document.getElementById("start").removeAttribute("disabled");
  clearInterval(time);
  if (hour != 0 || minute != 0 || second != 0) {
    lap(hour, minute, second);
  }
  isStopped = true;
}

function resetTimer() {
  if (!isStopped) {
    stopTimer();
  }
  hour = 0;
  minute = 0;
  second = 0;
  document.getElementById("hour").innerText = "00";
  document.getElementById("min").innerText = "00";
  document.getElementById("sec").innerText = "00";
}

function starTimer() {
  document.getElementById("start").setAttribute("disabled", "true");
  time = setInterval(() => {
    timer();
  }, 1000);
}
function stopTimer() {
  document.getElementById("start").removeAttribute("disabled");
  clearInterval(time);

  lip(hour, minute, second);
}

function reseTimer() {
  // اگر زمان صفر نیست، تابع lap را فراخوانی کن
  if (hour != 0 || minute != 0 || second != 0) {
    lap(hour, minute, second);
  }
}

function resetTimer() {
  stopTimer();
  hour = 0;
  minute = 0;
  second = 0;
  document.getElementById("hour").innerText = "00";
  document.getElementById("min").innerText = "00";
  document.getElementById("sec").innerText = "00";
}
function timer() {
  second++;
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  if (hour == 24) {
    resetTimer();
  }
  document.getElementById("hour").innerText = returnData(hour);
  document.getElementById("min").innerText = returnData(minute);
  document.getElementById("sec").innerText = returnData(second);
}

function returnData(input) {
  return input > 9 ? input : `0${input}`;
}

function lip(h, m, s) {
  const tableLip = document.querySelector("#lips");

  const timerDate = document.createElement("h2");
}
function lap(h, m, s) {
  const tableLip = document.querySelector("#lips");
  const timerDate = document.createElement("h2");

  const timerNode = document.createTextNode(
    returnData(h) + ":" + returnData(m) + ":" + returnData(s)
  );
  timerDate.appendChild(timerNode);
  tableLip.appendChild(timerDate);
}
