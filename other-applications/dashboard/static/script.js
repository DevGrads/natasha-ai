let circularProgress = document.querySelector(".progress-circle")
circularValue = document.querySelector(".progress-value")

let progressStartValue = 0;
 progressEndValue = 70;
 speed = 100;

 let progress = setInterval(() => {
    progressStartValue++;
    
    circularValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg,
       #f7cff9 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress)
    }
    
    
 }, speed);
 const ctx = document.getElementById('myChart');

 new Chart(ctx, {
   type: 'bar',
   data: {
     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
     datasets: [{
       label: '# of Votes',
       data: [12, 19, 3, 5, 2, 3],
       borderWidth: 1
     }]
   },
   options: {
     scales: {
       y: {
         beginAtZero: true
       }
     }
   }
 });
 
 

