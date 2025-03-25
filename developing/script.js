// Variaveis com referencias dos elementos "ID" HTML/CSS:
const song = document.getElementById('audio');                              //tag audio
const cover = document.getElementById('cover');                             //tag img
const songName = document.getElementById('song-name');                      //tag nome da musica
const bandName = document.getElementById('band-name');                      //tag nome da banda
const play = document.getElementById('play');                               //tag botão play
const next = document.getElementById('next');                               //tag botão Próximo
const previous = document.getElementById('previous');                       //tag botão Anterior
const shuffleButton = document.getElementById('shuffle');                   //tag botão embaralhar
const repeatButton = document.getElementById('repeat');                     //tag botão repetir
const likeButton = document.getElementById('like');                         //tag botão favoritar
const currentProgress = document.getElementById('current-progress');        //style do css da bara de progresso
const progressContainer = document.getElementById('progress-container');    //tag da bara de progresso
const songTime = document.getElementById('song-time');                      //tag Tempo atual da musica
const totalTime = document.getElementById('total-time');                    //tag Tempo total da musica


// Musicas & suas caracteristicas:
const music0 = {
    Name_music: "4am",
    artist: "Justin Stone",
    file: "Justin_Stone_4am",
    liked: false
};

const music1 = {
    Name_music: `Mun Rá`,
    artist: "Sabotage",
    file: "Sabotage_Mun_Ra",
    liked: false
};

const music2 = {
    Name_music: "Runaway",
    artist: "Galantis",
    file: "Galantis_Runaway",
    liked: false
};

// Variaveis auxiliares:
let isPlaying = false;
let isShuffled = false;
let isRepeating = false;

// Array de playlist das musicas com database do navegador:
const originalPlaylist = JSON.parse(localStorage.getItem('Playlist')) ?? [music0, music1, music2];
let sortedPlaylist = [...originalPlaylist];
let index = 0;

// Funções:
function playsong() {
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

function pausesong() {
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
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
    cover.src = `/artifacts/images/cover/${sortedPlaylist[index].file}.jpg`;
    song.src = `/artifacts/songs/${sortedPlaylist[index].file}.mp3`;
    songName.innerText = sortedPlaylist[index].Name_music;
    bandName.innerText = sortedPlaylist[index].artist;
    likeButtonManipulate();
}

function previousSong(){
    if(index === 0){
        index = sortedPlaylist.length - 1;
    }
    else{
        index -= 1;
    }
    initializeSong();
    playsong();
}

function nextSong(){
    if(index === sortedPlaylist.length - 1){
        index = 0;
    }
    else{
        index += 1;
    }
    initializeSong();
    playsong();
}

function updateProgress(){
    //currentTime = tempo atual da musica em segundos
    //duration = duração total da musica (3 min)
    const barwidth = (song.currentTime/song.duration)*100;                     
    currentProgress.style.setProperty('--progress', `${barwidth}%`);
    songTime.innerText = timeProgress(song.currentTime);
}

function jumpTo(event){                                     
    //parametro event''', usado para receber o click
    const width = progressContainer.clientWidth;            
    const clickPosition = event.offsetX;                    
    const jumpToTime = (clickPosition/width)* song.duration;
    song.currentTime = jumpToTime;                          
}

function embaralhamento(array) {
    const tamanhoArray = array.length;
    let indiceAtual = tamanhoArray - 1;

    while (indiceAtual > 0) { 
        let indiceAleatorio = Math.floor(Math.random() * (indiceAtual + 1));
        [array[indiceAtual], array[indiceAleatorio]] = [array[indiceAleatorio], array[indiceAtual]];
        indiceAtual -= 1;
    }
    return array; // Retorna o array embaralhado
}

function shuffleButtonClicked() {
    if (!isShuffled) {
        isShuffled = true;
        sortedPlaylist = embaralhamento([...originalPlaylist]); // Embaralha uma cópia
        shuffleButton.classList.add('button-active');
    } else {
        isShuffled = false;
        sortedPlaylist = [...originalPlaylist]; // Volta à ordem original
        shuffleButton.classList.remove('button-active');
    }
}

function repeatButtonClicked() {
    if (isRepeating === false) {
        isRepeating = true;
        repeatButton.querySelector('.bi').classList.remove('bi-repeat');
        repeatButton.querySelector('.bi').classList.add('bi-repeat-1');
        repeatButton.classList.add('button-active');
    } else {
        isRepeating = false;
        repeatButton.querySelector('.bi').classList.remove('bi-repeat-1');
        repeatButton.querySelector('.bi').classList.add('bi-repeat');
        repeatButton.classList.remove('button-active');
    }
}

function nextOrRepeat() {
    if (isRepeating === false) {
        nextSong();
    }
    else {
        playsong();
    }
}

function timeProgress(originalNumber) {
    let hours = Math.floor(originalNumber / 3600);
    let min = Math.floor((originalNumber - hours * 3600) / 60);
    let secs = Math.floor(originalNumber - hours * 3600 - min *60);

    return`${hours.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateTotalTime() {
    totalTime.innerText = timeProgress(song.duration);
}

function likeButtonManipulate() {
    if (sortedPlaylist[index].liked === true) {
        likeButton.querySelector('.bi').classList.remove('bi-heart');
        likeButton.querySelector('.bi').classList.add('bi-heart-fill');
        likeButton.classList.add('button-active');
    }
    else {
        likeButton.querySelector('.bi').classList.remove('bi-heart-fill');
        likeButton.querySelector('.bi').classList.add('bi-heart');
        likeButton.classList.remove('button-active');
    }
}

function likeButtonClicked() {
    if (sortedPlaylist[index].liked === false) {
        sortedPlaylist[index].liked = true;
    } else {
        sortedPlaylist[index].liked = false;
    }

    likeButtonManipulate();
    localStorage.setItem('Playlist', JSON.stringify(originalPlaylist));
}


// Executa as funções de acordo com os seus requisitos:
initializeSong();                                               //Evento que puxa os atributos da musica e apresenta na interface do usuario
play.addEventListener('click', playPauseDecider);               //Evento de clicar (Pause)
previous.addEventListener('click', previousSong);               //Evento de clicar (Anterior)
next.addEventListener('click', nextSong);                       //Evento de clicar (Próximo)
shuffleButton.addEventListener('click', shuffleButtonClicked);  //Evento de clicar (embaralhar)
repeatButton.addEventListener('click', repeatButtonClicked);    //Evento de clicar (Repetir)
likeButton.addEventListener('click', likeButtonClicked);        //Evento de clicar (Favoritar)
progressContainer.addEventListener('click', jumpTo);            //Evento de clicar (Pular tempo da musica)
song.addEventListener('timeupdate', updateProgress);            //Evento de atualização do tempo atual da musica
song.addEventListener('loadedmetadata', updateTotalTime);       //Evento de atualização do tempo total da musica
song.addEventListener('ended', nextOrRepeat);                   //Evento de atualização do final da musica