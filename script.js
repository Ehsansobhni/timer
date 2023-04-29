let hour = 0;
let minute = 0;
let second = 0;
let time;


function starTimer() {
    // stopTimer();
    document.getElementById("start").setAttribute("disabled","true");
    time = setInterval(() => { timer(); }, 10);
  }
  
  function stopTimer() {
    document.getElementById("start").removeAttribute("disabled");
    lib(hour,minute,second);
    
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

  function lib(h,m,s){
    const tableLib = document.querySelector("#lib");
    
    const timerDate = document.createElement("h1");
    

    const timerNode = document.createTextNode(returnData(h)+":"+ returnData(m)+":"+returnData(s));
    timerDate.appendChild(timerNode);
    tableLib.appendChild(timerDate);
  }
