let hour = 0;
let minute = 0;
let second = 0;
let time;


function starTimer() {
    stopTimer();
    time = setInterval(() => { timer(); }, 1000);
  }
  
  function stopTimer() {
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

// let counter = 0;
// let min = 0;
// let timeout;
// let timeMin;
// let timer_on = 0;
// // debugger;
// function minCount(){
//     if(min < 10 )
//     {
//     min++;
//     const time2 = "0" + min;
//     document.getElementById("min").innerHTML = time2;
    
//     timeMin = setTimeout(minCount, 60000);
//     }else if(min > 9 && min < 60){
//       min++;
//       document.getElementById("min").innerHTML = min;
      
//       timeMin = setTimeout(minCount, 60000);
//     }else{
//         min = 0;
//         // timeMin = setTimeout(minCount, 100);
  
//     }
//   }
// function timedCount() {
  
//   if(counter < 10 )
//   {
  
//   const time1 = "0" + counter;
//   counter++;
//   document.getElementById("sec").innerHTML = time1;
  
//   timeout = setTimeout(timedCount, 1000);
  
//   }else if(counter > 9 && counter < 60){
    
//     document.getElementById("sec").innerHTML = counter;
//     counter++;
//     timeout = setTimeout(timedCount, 1000);
//   }else{
//       counter = 0;
//       timeout = setTimeout(timedCount, 100);
//       minCount();
//   }
// }

// function startCount() {
    
//   if (!timer_on) {
//     timer_on = 1;
//     timedCount();
//   }
// }

// function stopCount() {
//   clearTimeout(timeout);
//   timer_on = 0;
// }