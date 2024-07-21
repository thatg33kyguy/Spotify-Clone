console.log("Welcome to Spotify");

let songIndex=0;
let audioElement = new Audio('songs/LMLY.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');

let songs =[

    {songName:"Let Me Love You", filePath: "songs/LMLY.mp3", coverPath: "covers/1.jpg"},
    {songName:"Hold On", filePath :"songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName:"I'm Not Afraid", filePath:"songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName:"No Surprises", filePath:"songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName:"Welcome To The Black Parade", filePath:"songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName:"Bohemian Rhapsody", filePath:"songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName:"Someone You Loved", filePath:"songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName:"All You Need Is Love", filePath:"songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName:"True Love", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName:"Heavy", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
];


// audioElement.play();


//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
  
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause'); 
        gif.style.opacity=1;
    }

    else if(audioElement.played || audioElement.currentTime>0){
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }

})



audioElement.addEventListener('timeupdate', ()=>{

    
     //update seekbar

    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value =progress;

})   

myProgressBar.addEventListener('change', ()=>{

    audioElement.currentTime= myProgressBar.value * audioElement.duration/100;
})


songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
       songIndex=parseInt(e.target.id);
       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
       audioElement.src= `songs/${songIndex+1}.mp3`;
       masterSongName.innerText=songs[songIndex].songName;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
    })
})


document.getElementById('next').addEventListener('click', ()=>{

    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }

    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongNmae.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{

    if(songIndex<=0){
        songIndex=9;
    }
    else{
        songIndex-=1;
    }

    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongNmae.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})