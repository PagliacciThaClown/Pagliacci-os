var count = 0;
var audio = document.getElementById('audio');
var audioPlayPause = document.getElementById('audioPlayPause');
var audioStop = document.getElementById('audioStop');

audioPlayPause.addEventListener('click',function(){
    if(count == 0){
        count = 1;
        audio.play();
        audioPlayPause.innerHTML = "<i class='fa fa-pause'></i>";
    }else{
        count= 0;
        audio.onpause();
        audioPlayPause.innerHTML = "<i class='fa fa-play'></i>";    }
    }
})