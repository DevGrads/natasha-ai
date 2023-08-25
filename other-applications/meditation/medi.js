{/* <script> */ }
let userBG = document.querySelector('select')
let bgVd = document.querySelector('video')
let bgAudio = document.querySelector('.audioSource')
let bgSelectBtn = document.querySelector('select')

bgSelectBtn.addEventListener('change', function () {

  console.log('changed select options')
  if (userBG.value == 'Forest') {
    bgVd.src = "./video/calm_forest.mp4"
    bgAudio.src = './sfx/Nature_Sound.mp3'
  }
  if (userBG.value == 'fire') {
    bgVd.src = "./video/fire_scene.mp4"
    bgAudio.src = './sfx/fire_sound.mp3'
  }
  if (userBG.value == 'cloud') {
    bgVd.src = "./video/cloud.mp4"
    bgAudio.src = './sfx/clouds.mp3'
  }
  if (userBG.value == 'rain') {
    bgVd.src = "./video/rain.mp4"
    bgAudio.src = './sfx/rain.mp3'

  }
 
  if (userBG.value == 'space') {
    bgVd.src = "./video/star.mp4"
    bgAudio.src = './sfx/Deht.mp3'
  }
  if (userBG.value == 'meditation') {
    bgVd.src = "./video/buddha.mp4"
    bgAudio.src = './sfx/meditation2.mp3'
  }

})
// timer script//
class Timer {
  constructor(root) {
    root.innerHTML = Timer.getHTML();

    this.el = {
      minutes: root.querySelector(".timer__part--minutes"),
      seconds: root.querySelector(".timer__part--seconds"),
      control: root.querySelector(".timer__btn--control"),
      reset: root.querySelector(".timer__btn--reset")
    };

    this.interval = null;
    this.remainingSeconds = 0;

    this.el.control.addEventListener("click", () => {
      if (this.interval === null) {
        this.start();
      } else {
        this.stop();
      }
    });

    this.el.reset.addEventListener("click", () => {
      const inputMinutes = prompt("Enter number of minutes:");

      if (inputMinutes < 60) {
        this.stop();
        this.remainingSeconds = inputMinutes * 60;
        this.updateInterfaceTime();
      }
    });
  }

  updateInterfaceTime() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;

    this.el.minutes.textContent = minutes.toString().padStart(2, "0");
    this.el.seconds.textContent = seconds.toString().padStart(2, "0");
  }

  updateInterfaceControls() {
    if (this.interval === null) {
      this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
      this.el.control.classList.add("timer__btn--start");
      this.el.control.classList.remove("timer__btn--stop");
    } else {
      this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
      this.el.control.classList.add("timer__btn--stop");
      this.el.control.classList.remove("timer__btn--start");
    }
  }
// start function for the timer
  start() {
    if (this.remainingSeconds === 0) return;

    this.interval = setInterval(() => {
      this.remainingSeconds--;
      this.updateInterfaceTime();

      if (this.remainingSeconds === 0) {
        this.stop();
      }
    }, 1000);

    this.updateInterfaceControls();
  }
//stop function for the timer
  stop() {
    clearInterval(this.interval);

    this.interval = null;

    this.updateInterfaceControls();
  }
// including HTML part
  static getHTML() {
    return `
<span class="timer__part timer__part--minutes">00</span>
<span class="timer__part">:</span>
<span class="timer__part timer__part--seconds">00</span>
<button type="button" class="timer__btn timer__btn--control timer__btn--start">
  <span class="material-icons">play_arrow</span>
</button>
<button type="button" class="timer__btn timer__btn--reset">
  <span class="material-icons">timer</span>
</button>
`;
  }
}
new Timer(
  document.querySelector(".timer")
);