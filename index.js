(() => {
  const audio = document.getElementById('audio');
  const play = document.getElementById('play');
  const play_icon = document.querySelector('#play i')
  const currentTime = document.getElementById('currentTime')
  const durationTime = document.getElementById('durationTime')
  const progressMusic = document.getElementById('progress-music')
  let buffered = 0;

  if (audio.readyState) {
   durationTime.innerHTML =  audioTimer(audio.duration)
  }

  play.addEventListener('click', () => {
    if (play_icon.classList.contains('fa-play-circle')) {
      play_icon.classList.remove('fa-play-circle')
      play_icon.classList.add('fa-pause-circle')

      if (audio.play()) {
        let timer = setInterval(() => {
          buffered = (audio.currentTime / audio.duration * 100)
          currentTime.innerHTML = audioTimer(audio.currentTime);
          progressMusic.style.width = buffered + '%';

          if (audio.currentTime === audio.duration) {
            progressMusic.style.width = '0%'
            play_icon.classList.remove('fa-pause-circle')
            play_icon.classList.add('fa-play-circle')
            audio.pause()
            clearInterval(timer)
          }
        }, 1000)
      }
    } else {
      audio.pause()
      play_icon.classList.remove('fa-pause-circle')
      play_icon.classList.add('fa-play-circle')
    }

    console.log(Math.floor(audio.duration))
  })

  /*document.getElementById('pause').addEventListener('click', () => {
    audio.pause();
  })*/

  /*document.getElementById('vl+').addEventListener('click', () => {
    audio.volume =  (8 / 10);
    alert(audio.volume)
  })

  document.getElementById('vl-').addEventListener('click', () => {
    audio.pause();
  })*/

  function audioTimer(timer) {
    let hr  = Math.floor(timer / 3600);
    let min = Math.floor((timer - (hr * 3600))/60);
    let sec = Math.floor(timer - (hr * 3600) -  (min * 60));

    if (min < 10) { min = "0" + min; }
    if (sec < 10) { sec  = "0" + sec; }
    return min + ':' + sec;
  }

})()