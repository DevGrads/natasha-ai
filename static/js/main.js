



let userTextInp = document.querySelector('.prompt-input');
const btn = document.querySelector('.search-btn');
const micBtn = document.querySelector('.mic-btn');

// Hiding the sound waves in page load(to execute when micBtn is clicked) 
document.querySelector('.waveContainer').style.display = 'none' 


// Listening when mic button is clicked and showing waves
let isListening = false;
micBtn.addEventListener('click', function(){

  if (isListening === false){
    recognition.start()
    isListening = true;
  }
  else{
    isListening = false;
    recognition.stop()
    window.location('#nav')
  }
})






















// Space and excape thing
document.addEventListener('keydown', (event) => {
  console.log(event.key)

  if (event.code === 'Enter') {
    btn.click()
  }

  if (event.code === 'Escape') {

    alert('escape')
    userText.blur()

  }
  if (event.target.tagName.toLowerCase() === 'input') {
    // Do nothing or perform specific actions for input
    return;
  }


  if (event.code === 'Space') {

    event.preventDefault()
    // window.scrollTo(0, 0);
    if (isListening === false) {
      recognition.start()
      isListening = true;
    }
    else {
      isListening = false;
      recognition.stop()
    }
    // return;
  }


})