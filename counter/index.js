const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const counter = document.getElementById("count");
const resetBtn = document.getElementById("reset");

let count = 0;

minusBtn.addEventListener("click",()=>{
    count--;
    counter.innerText = count;
    updateDisplay();
});


plusBtn.addEventListener("click", ()=>{
    count++;
    counter.innerText = count;
    updateDisplay();
});

resetBtn.addEventListener("click",()=>{
    count = 0;
    counter.innerText = count;
    updateDisplay();
});

function updateDisplay() {
  counter.innerText = count; 
  counter.classList.remove("positive", "negative");

  if (count > 0) {
    counter.classList.add("positive");
  } else if (count < 0) {
    counter.classList.add("negative");
  }
}
