/**
 *
 * WebStorm October 30, 2018
 * By Luis Solorzano
 *
 */

(() => {
  //const audio = document.getElementById('audio');
  //audio.setAttribute('src', '../assets/media/audio2.mp3')
  const audio = new Audio()
  audio.src = '../assets/media/audio2.mp3'

  const play = document.getElementById('play');
  const play_icon = document.querySelector('#play i')
  const currentTime = document.getElementById('currentTime')
  const durationTime = document.getElementById('durationTime')
  let buffered = 0;

  const audioTimer = (timer) => {
    let hr  = Math.floor(timer / 3600);
    let min = Math.floor((timer - (hr * 3600))/60);
    let sec = Math.floor(timer - (hr * 3600) -  (min * 60));

    if (min < 10) { min = "0" + min; }
    if (sec < 10) { sec  = "0" + sec; }
    return min + ':' + sec;
  }

  //if (audio.readyState) {
  //}

  play.addEventListener('click', () => {
    const progressMusic = document.getElementsByClassName('slider-fill')[0]
    const progressMusic2 = document.getElementsByClassName('slider-handle')[0]
    const duration = audio.duration
    durationTime.innerHTML =  audioTimer(duration)

    if (play_icon.classList.contains('fa-play-circle')) {
      play_icon.classList.remove('fa-play-circle')
      play_icon.classList.add('fa-pause-circle')

      if (audio.play()) {
        let timer = setInterval(() => {
          buffered = (Math.floor(audio.currentTime) / Math.floor(audio.duration) * 100)
          currentTime.innerHTML = audioTimer(audio.currentTime);
          progressMusic.style.width = buffered + '%';
          progressMusic2.style.left = buffered + '%';

          if (audio.currentTime === audio.duration) {
            progressMusic.style.width = '0%'
            progressMusic2.style.left = '0%';
            currentTime.innerHTML = '00:00'
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

})()