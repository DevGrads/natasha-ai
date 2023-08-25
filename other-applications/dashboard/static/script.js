let circularProgress = document.querySelector(".progress-circle")
circularValue = document.querySelector(".progress-value")

// getting name from local storage:
let name = localStorage.getItem('name')
let totalPomoHrs = Number(localStorage.getItem('totalPomoMins'))
let allTodoLists = JSON.parse(localStorage.getItem('allTodoLists')) // get all the done tasks
let allTodoCompleted = 0; 
let notTodoCompleted = 0;
allTodoLists.forEach(element => {
  if(element.isCompleted){
    allTodoCompleted++
  }
  else{
    notTodoCompleted++
  }
});
let meditationSecs = Number(localStorage.getItem('meditationSecs')) //
let allCurves = JSON.parse(localStorage.getItem('allCurves'))



let progressStartValue = 0;
let progressEndValue = 27;
speed = 20;

let progress = setInterval(() => {
  progressStartValue++;

  circularValue.textContent = `${progressStartValue}%`
  circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg,
       #f7cff9 0deg)`

  if (progressStartValue == progressEndValue) {
    clearInterval(progress)
  }


}, speed);
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Tuesday', 'Wednesday', 'Yesterday', 'Today'],
    datasets: [{
      label: 'Weekly report',
      data: [
        0,
        0,
        30,
        totalPomoHrs + allTodoCompleted + meditationSecs
      ],
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





console.log(name, totalPomoHrs, allTodoLists, meditationSecs, allCurves)


// fetching data to dashboard.

// for graph total all
document.querySelector('.workingDisplay').innerHTML = totalPomoHrs


// total todo no
document.querySelector('.totalDisplay').innerText = allTodoLists.length

let oldProgress = 204;


// change name from local storage
document.querySelector('.name').innerHTML = name


// meditation
document.querySelector('.mediProgress').value = meditationSecs;