var arr = [
    {SongName:"You and me", url:"./songs/You and Me.mp3",img:"./images/Shubh.jpg"},
    {SongName:"O Mahi", url:"./songs/O Mahi.mp3",img:"./images/dunki.jpg"},
    {SongName:"Pehle Bhi Main", url:"./songs/Pehle Bhi Main.mp3",img:"./images/animal.jpg"},
    {SongName:"Derniere Danse", url:"./songs/Derniere Danse.mp3",img:"./images/indila.jpg"}
]

var allSongs = document.querySelector("#all-songs")
var poster = document.querySelector("#left")
var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")

var audio = new Audio()

var selectedSong = 0

function mainfunction(){
    var clutter = ""

arr.forEach(function(elems, index){
    clutter += `<div class="song-card" id=${index}>
    <div class="part1">
        <img src=${elems.img} alt="">
        <h2>${elems.SongName}</h2>
    </div>
   <h6>3:56</h6>
</div>`
})

    allSongs.innerHTML = clutter;
    audio.src = arr[selectedSong].url
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}
mainfunction();

allSongs.addEventListener("click", function(dets){
    selectedSong = dets.target.id
    play.innerHTML = `<i class="ri-pause-mini-line"></i>`
    flag = 1
    mainfunction()
    audio.play()
})


var flag = 0;
play.addEventListener("click",function(){
    if (flag == 0){
        play.innerHTML = `<i class="ri-pause-mini-line"></i>`
        mainfunction()
        audio.play()
        flag = 1;
    }
    else{
        play.innerHTML = `<i class="ri-play-fill"></i>`
        mainfunction()
        audio.pause()
        flag = 0;
    }
    
})

forward.addEventListener("click", function(){
    if(selectedSong < arr.length - 1){
        selectedSong++
        mainfunction()
        audio.play()
    }
    else{
        forward.style.opacity = 0.4
    }
})

backward.addEventListener("click", function(){
    if(selectedSong > 0){
        selectedSong--
        mainfunction()
        audio.play()
    }
    else{
        backward.style.opacity = 0.4
    }
})