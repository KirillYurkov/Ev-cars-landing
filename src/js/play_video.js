let btnPlay=document.querySelector('.play');
let video=document.querySelector('video');
let posterSrc=video.getAttribute('poster');

btnPlay.addEventListener('click',function(){
    console.log(video);
    video.play();
});
video.addEventListener('ended',function(){
    video.currentTime=0;
    video.pause();
    video.load();
});
