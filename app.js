const number = document.getElementById("num");
const btn = document.getElementById("btn");
const input = document.querySelector(".input");
const btn1 = document.getElementById("btn-1");
const alarm = document.querySelector("audio");
let count;
const settime = () => {
  count = parseInt(input.value);
  if (isNaN(count) || count <= 0) {
    alert("Invalid Input");
    return;
  }
  number.textContent = count;
  return count;
};
const counter = () => {
  if (count == 0) {
    clearInterval(mytimer);
    alarm.play();
    return;
  }
  count--;
  console.log(count);

  number.textContent = count;
};

let mytimer;
// const starttimer=()=>{setInterval(counter,1000)};

const controlTimer = () => {
  if (count == 0 || isNaN(count)) {
    alert("Invlaid input");
    return;
  }
  mytimer = setInterval(counter, 1000);
};
btn.addEventListener("click", controlTimer);
btn1.addEventListener("click", settime);
