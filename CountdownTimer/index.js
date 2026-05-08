// let hourInput = document.getElementById("hours");
// let minInput = document.getElementById("minutes");
// let secInput = document.getElementById("seconds");

// let startBtn = document.getElementById("start-btn");
// let resetBtn = document.getElementById("reset-btn");

// let isTimerRunning = false;
// let countDownInterval = null;

// startBtn.addEventListener("click", ()=>{
  
//   console.log("start button clicked");
//   let hourInputValue = Number(hourInput.value);
//   let minInputValue = Number(minInput.value);
//   let secInputValue = Number(secInput.value);
//   console.log(hourInputValue, minInputValue, secInputValue);

//   let totalSeconds = hourInputValue * 3600 + minInputValue * 60 + secInputValue;
  
//   if(totalSeconds === 0){
//     return;
//   }

//   if(isTimerRunning === false){
//     isTimerRunning = true;
//     startBtn.innerText = "Pause";

//     countDownInterval = setInterval(() => {
//       totalSeconds--;
//       let hourInputValue = Math.floor(totalSeconds/3600);
//       let minInputValue = Math.floor((totalSeconds%3600)/60);
//       let secInputValue = totalSeconds % 60;

//       hourInput.value = String(hourInputValue).padStart(2, "0");
//       minInput.value = String(minInputValue).padStart(2, "0");
//       secInput.value = String(secInputValue).padStart(2, "0");

//       if(totalSeconds <= 0){
//         clearInterval(countDownInterval);
//         isTimerRunning = false;
//         startBtn.innerText = "Start";
//         hourInput.value = 0;
//         minInput.value = 0;
//         secInput.value = 0;
//       }
//     }, 1000);
//     console.log(totalSeconds);
//     console.log(hourInputValue, minInputValue, secInputValue);
//   }else{
//     isTimerRunning = false;
//     startBtn.innerText = "Start";
//     clearInterval(countDownInterval);
//   }
// })
// resetBtn.addEventListener("click", ()=>{
//   clearInterval(countDownInterval);
//   isTimerRunning = false;
//   startBtn.innerText = "Start";
//   hourInput.value = "";
//   minInput.value = "";
//   secInput.value = "";
// })



// get all the input fields 
let hourInput = document.getElementById("hours");
let minInput = document.getElementById("minutes");
let secInput = document.getElementById("seconds");

//get the buttons 
let startBtn = document.getElementById("start-btn");
let resetBtn = document.getElementById("reset-btn");

// to  check timer is running or not we need to set boolean variable with initial value to false
let isTimerRunning = false;
let countDownInterval = null;


startBtn.addEventListener("click",()=>{

  // extract all the values of the input fields and convert them into number
  let hourInputValue= Number(hourInput.value);
  let minInputValue = Number(minInput.value);
  let secInputValue = Number(secInput.value);

  //calculate the total seconds from the hours minutes and seconds 
  let totalSeconds = hourInputValue * 3600 + minInputValue * 60 + secInputValue;
    //first check timer run ho raha he kya 
    if(isTimerRunning === false){
      // click hone pe agar timer run nahi ho raha tha to start kardo and button ka text change karke Pause kardo 
      isTimerRunning = true;
      startBtn.innerText = "Pause";
      
      // ab timer start karne ke baad hume total seconds ko har second kam karna he and uske hisab se hours minutes and seconds ko update karna he
      countDownInterval = setInteval(()=>{
        totalSeconds--;
        let hourInputValue = Math.floor(totalSeconds/3600);
        let minInputValue= Math.floor((totalSeconds%3600)/60);
        let secondInputValue = totalSeconds % 60;
        
      },1000);
      
    }else{
      // or agar timer run ho rha that to click karne par  use pause karna he and button text change karna he 
      isTimerRunning = false;
      startBtn.innerText = "Start";
    }
    

})