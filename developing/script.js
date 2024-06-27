const song = document.getElementById('audio');                              //tag audio
const cover = document.getElementById('cover');                             //tag img
const songName = document.getElementById('song-name');                      //tag nome da musica
const bandName = document.getElementById('band-name');                      //tag nome da banda
const play = document.getElementById('play');                               //tag botão play
const next = document.getElementById('next');                               //tag botão next
const previous = document.getElementById('previous');                       //tag botão previous
const currentProgress = document.getElementById('current-progress');        //style do css da bara de progresso

const music0 = {
    Name_music: "4am",
    artist: "Justin Stone",
    file: "Justin_Stone_4am"
};

const music1 = {
    Name_music: `Mun Rá`,
    artist: "Sabotage",
    file: "Sabotage_Mun_Ra"
};

const music2 = {
    Name_music: "Runaway",
    artist: "Galantis",
    file: "Galantis_Runaway"
};

let isPlaying = false;
const playlist = [music0, music1, music2];
let index = 0;


function playsong() {
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

function pausesong() {
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
}

function playPauseDecider() {
    if(isPlaying === true){
        pausesong();
    }
    else{
        playsong();
    }
}

function initializeSong() {
    cover.src = `/imagens/${playlist[index].file}.jpg`;
    song.src = `/songs/${playlist[index].file}.mp3`;
    songName.innerText = playlist[index].Name_music;
    bandName.innerText = playlist[index].artist;
}

function previousSong(){
    if(index === 0){
        index = playlist.length - 1;
    }
    else{
        index -= 1;
    }
    initializeSong();
    playsong();
}

function nextSong(){
    if(index === playlist.length - 1){
        index = 0;
    }
    else{
        index += 1;
    }
    initializeSong();
    playsong();
}

function updateProgressBar(){
    //currentTime = tempo atual da musica em segundos
    //duration = duração total da musica (3 min)
    const barwidth = (song.currentTime/song.duration)*100;                     
    currentProgress.style.setProperty('--progress', `${barwidth}%`);
}


initializeSong()

play.addEventListener('click', playPauseDecider);           //click = evento de clicar
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
song.addEventListener('timeupdate', updateProgressBar);     //timeupdate = evento de atualização do tempo da musica