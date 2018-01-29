// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build functions

function togglePlay() {
  // if(video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }
//shorter way to write the above:
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}
//toggle button to play or pause symbol
function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}
//skip buttons
function skip() {
  //console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

//for range sliders
function handleRangeUpdate() {
  //console.log(this.name);
  //console.log(this.value);
  video[this.name] = this.value;
}

//progress bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
//so we can click/drag on progress bar
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  console.log(e);
}

//Hook up the event listeners
//hook up pause/play when click on video
video.addEventListener('click', togglePlay);
//same for clicking play button
toggle.addEventListener('click', togglePlay);
//toggle button to play or pause
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
// skip buttons
skipButtons.forEach(button => button.addEventListener('click', skip));
//range sliders
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
//progress
video.addEventListener('timeupdate', handleProgress);

//so that they have to click to get the progress bar to move
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
