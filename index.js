let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.CurrentTime;
}

function playPause(){
    if (ctrlIcon.classList.contains('fa-pause')) {
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
    }
    else{
        song.play();
        ctrlIcon.classList.add('fa-pause');
        ctrlIcon.classList.remove('fa-play');
    }
}

if(song.play()){
    setInterval(() => {
        progress.value = song.CurrentTime;
    },500);
}
progress.onchange = function(){
    song.play();
    song.CurrentTime = progress.value;
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
}