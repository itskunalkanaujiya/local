console.log("Welcome to Spotify");
let audio= new Audio('1.mp3');
let index=0;
let play=document.getElementById('play');
let progress=document.getElementById('progress');
let gif=document.getElementById('gif');
let naam =document.getElementById('naam');
let songs=[
    {
        songName:"Tere Janey Ke Baad",
        path:"1.mp3",
    },
    {
        songName:"Na Kehna Tum",
        path:"1.mp3",
    },
    {
        songName:"Fir Se Shuru",
        path:"1.mp3",
    },
    {
        songName:"Tu Rehti Hai",
        path:"1.mp3",
    },
    {
        songName:"Kahaani",
        path:"1.mp3",
    },
    {
        songName:"Ishq",
        path:"1.mp3",
    },
    {
        songName:"Humara Ho Gaya",
        path:"1.mp3",
    },
];
play.addEventListener('click',()=>
{
    if(audio.paused || audio.currentTime<=0)
    {
        audio.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else
    {
        audio.pause();
         play.classList.remove('fa-circle-pause');
      play.classList.add('fa-circle-play');
      gif.style.opacity=0;
    }
})

audio.addEventListener('timeupdate',()=>
{
    console.log('timeupdate');
     pro=parseInt((audio.currentTime/audio.duration)*100);
     console.log(audio.currentTime);
     console.log(pro);
    progress.value=pro;
})
progress.addEventListener('change',()=>
{
    audio.currentTime=progress.value * audio.duration/100;
})
const make = ()=>{
    Array.from(document.getElementsByClassName('please')).forEach((element)=>
        {
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        })
        
}
Array.from(document.getElementsByClassName('please')).forEach((element)=>
{
    element.addEventListener('click',(e)=>
    {
        make();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        audio.src=`${index}.mp3`;
        naam.innerHTML=songs[index-1].songName;
        audio.currentTime=0;
        audio.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
    }
)

})
document.getElementById('prev').addEventListener('click',()=>
{
    if(index==0)
    {
        index=9;
    }
    else
    {
    index=index-1;
    }
    audio.src=`${index}.mp3`;
    naam.innerHTML=songs[index].songName;
    audio.currentTime=0;
    audio.play();
    gif.style.opacity=1;
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');
})
document.getElementById('next').addEventListener('click',()=>
{
    if(index>9)
    {
        index=0;
    }
    else
    {
        index=index+1;
    }
    audio.src=`${index}.mp3`;
    naam.innerHTML=songs[index].songName;
        audio.currentTime=0;
        audio.play();
        gif.style.opacity=1;
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
    })


