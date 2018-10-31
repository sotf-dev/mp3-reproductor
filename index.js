(() => {
  const audio = document.getElementById('audio');
  let buffered = 0;

  if (audio.readyState) {
    document.getElementById('durationTime').innerHTML =  audioTimer(audio.duration)
    //alert('listo')
  }

  document.getElementById('play').addEventListener('click', () => {
    if (audio.play()) {
      let timer = setInterval(() => {
        document.getElementById('currentTime').innerHTML = audioTimer(audio.currentTime);

        document.getElementById('progress-music').style.width = (audio.currentTime / audio.duration * 100)+ '%';
        //document.getElementById('buffered').innerHTML = (audio.buffered.length / audio.duration * 100)

        if (audio.currentTime === audio.duration) {
          document.getElementById('progress-music').style.width = '0%'
          audio.pause()
          clearInterval(timer)
        }
      }, 1000)
    } else {
      audio.pause();
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