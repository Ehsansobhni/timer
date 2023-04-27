let hour = 0;
let minute = 0;
let second = 0;
let time;


function starTimer() {
    // stopTimer();
    document.getElementById("start").setAttribute("disabled","true");
    time = setInterval(() => { timer(); }, 1000);
  }
  
  function stopTimer() {
    document.getElementById("start").removeAttribute("disabled");
    clearInterval(time);
  }
  
  function reseTimer() {
    stopTimer();
    hour = 0;
    minute = 0;
    second = 0;
    
    document.getElementById('hour').innerText = '00';
    document.getElementById('min').innerText = '00';
    document.getElementById('sec').innerText = '00';
    
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
    if (hour == 24){
        reseTimer(); 
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('min').innerText = returnData(minute);
    document.getElementById('sec').innerText = returnData(second);
    
  }
  
  function returnData(input) {
    return input > 9 ? input : `0${input}`
  }
