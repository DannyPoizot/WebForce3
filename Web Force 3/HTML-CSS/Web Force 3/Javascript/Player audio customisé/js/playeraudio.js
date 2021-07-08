let player = document.querySelector(".player-audio");

let audio = document.querySelector(".player-source");

let isPlaying = false;

let btnIcon = document.querySelector("i");

const progress = document.querySelector(".player-progress");

const textTotaltime = document.getElementById("total");

const textCurrentTime = document.getElementById("current");

audio.addEventListener("loadedmetadata", function(){
  const minutes = Math.floor(audio.duration / 60);
  const seconds = Math.floor(audio.duration % 60);
  textTotaltime.textContent = minutes + ":" + seconds;
});

player.addEventListener("click", function() {
  if (isPlaying) {
  audio.pause();
  btnIcon.className = "fas fa-2x fa-play";
  } else {
    audio.play();
    btnIcon.className = "fas fa-2x fa-pause";
  }
  isPlaying = !isPlaying;
});

audio.addEventListener("timeupdate", function(){
    const percent = audio.currentTime * 100 / audio.duration;
    progress.setAttribute("value", Math.round(percent));

    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    textCurrentTime.textContent = minutes + ":" + seconds;
});

progress.addEventListener("click", function(e){
  const percent = e.offsetX * 100 / progress.offsetWidth;
  const time = percent * audio.duration / 100;
  audio.currentTime = Math.round(time);
});
