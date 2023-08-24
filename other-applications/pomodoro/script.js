let seconds = 59 ;
minutes = 24;

let Break;
console.log("working")
let play = document.getElementById('start');

let minDisplay = document.querySelector('.min')
let secDisplay = document.querySelector('.sec')



minDisplay.innerHTML = minutes;
secDisplay.innerHTML = seconds;

const interval1 = () =>{
    setInterval(startPomo , 100)
} 

play.addEventListener('click', interval1 );
// Changing mins based on js


function startPomo(){
    seconds = seconds - 1;
    secDisplay.innerHTML = seconds;
     if(seconds === 0)
     {
        seconds = 60;
        minutes = minutes - 1;
        minDisplay.innerHTML = minutes;
         if( minutes === -1 && seconds === 0){
            minutes = 0;
            seconds = 0;

            clearInterval(interval1)
         }
     }
 }