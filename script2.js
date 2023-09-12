let range = document.getElementById("range")
let song = document.getElementById("song")
let icon = document.getElementById("playicon")
let time = document.getElementById("time")
let cTime = document.getElementById("cTime")

song.onloadedmetadata = function () {
    range.max = song.duration;
    range.value = song.currentTime;
    time.innerHTML = "00:" + Math.floor(song.duration);
}
function PlayPaused() {
    if(icon.classList.contains("ri-play-circle-fill")){
        song.play();
        icon.classList.remove("ri-play-circle-fill")
        icon.classList.add("ri-pause-circle-fill")
        setInterval(() => {
            cTime.innerHTML = "0:" + Math.floor(song.currentTime);
        }, 1000);
        
    }else{
        song.pause();
        icon.classList.remove("ri-pause-circle-fill")
        icon.classList.add("ri-play-circle-fill")
    }
}
if (song.play()) {
    setInterval(()=>{
        range.value = song.currentTime;  
    },500)
}
range.onchange = function () {
    song.currentTime = range.value; 
}