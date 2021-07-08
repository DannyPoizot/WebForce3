class PLayer {

  constructor(id){
    this.container = document.getElementById(id);
    this.buildElements();
    this.bindEvents();
  }

  buildElements(){
    this.elements{
      audio: this.container.document.querySelector(".player-source");
      button: this.container.document.querySelector(".player-audio");
      progress: this.container.querySelector(".player-progress");
      textCurrentTime: document.getElementById("current");
      textTotalTime: document.getElementById("total");
    }

    this.elements.icon = this.elements.button.querySelector("i");

  }

  bindEvents(){

   this.elements.audio.addEventListener('loadedmetadata', () => {
     const time = this.convertSecondsToTime(this.elements.audio.duration);
     this.elements.textTotalTime.textContent = time;
   });

   this.elements.audio.addEventListener('timeupdate', function(){

   });

   this.elements.button.addEventListener('click', () => {
     if(this.elements.audio.paused === true){
         this.play();
     }else{
         this.pause();
     }
   });

   this.elements.progress.addEventListener('click', e => {
     const percent = e.offsetX * 100 / progress.offsetWidth;
     const time = percent * audio.duration / 100;
     audio.currentTime = Math.round(time);
   });
 }

 play(){

   this.elements.audio.play();
   this.elements.icon.classList.replace('fa-play', 'fa-pause');
 }

 progress(){

 }

 pause(){
   this.elements.audio.pause();
   this.elements.icon.classList.replace('fa-pause', 'fa-play');
 }

 convertSecondsToTime()


}

const player = new Player("player");
const player2 = new Player("player2");
