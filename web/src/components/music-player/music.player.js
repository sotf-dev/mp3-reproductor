/*
 * Play Track
 */
class Play extends React.Component {
  constructor () {
    super()
    this.audio = null
    this.play = this.play.bind(this)
  }

  componentDidMount () {
    this.audio = new Audio()
    this.audio.src = '../assets/media/audio2.mp3'
  }

  play () {
    const play_icon = document.querySelector('#play i')
    const currentTime = document.getElementById('currentTime')
    const durationTime = document.getElementById('durationTime')
    const progressMusic = document.getElementsByClassName('slider-fill')[0]
    const progressMusicAnimation = document.getElementsByClassName('slider-handle')[0]
    let buffered = 0

    if (play_icon.classList.contains('fa-play-circle')) {
      play_icon.classList.remove('fa-play-circle')
      play_icon.classList.add('fa-pause-circle')

      if (this.audio.play()) {
        durationTime.innerHTML = this.audioTimer(this.audio.duration)
        let timer = setInterval(() => {
          buffered = (Math.floor(this.audio.currentTime) / Math.floor(this.audio.duration) * 100)
          currentTime.innerHTML = this.audioTimer(this.audio.currentTime)
          progressMusic.style.width = buffered + '%'
          progressMusicAnimation.style.left = buffered + '%'

          if (this.audio.currentTime === this.audio.duration) {
            progressMusic.style.width = '0%'
            progressMusicAnimation.style.left = '0%'
            currentTime.innerHTML = '00:00'
            play_icon.classList.remove('fa-pause-circle')
            play_icon.classList.add('fa-play-circle')
            this.audio.pause()
            clearInterval(timer)
          }
        }, 1000)
      }
    } else {
      this.audio.pause()
      play_icon.classList.remove('fa-pause-circle')
      play_icon.classList.add('fa-play-circle')
    }

  }

  audioTimer (timer) {
    let hr = Math.floor(timer / 3600)
    let min = Math.floor((timer - (hr * 3600)) / 60)
    let sec = Math.floor(timer - (hr * 3600) - (min * 60))

    if (min < 10) { min = '0' + min }
    if (sec < 10) { sec = '0' + sec }
    return min + ':' + sec
  }

  render () {
    return (
      <li className="nav-item active">
        <a className="nav-link" href="#" id="play" onClick={this.play}>
          <i className="fal fa-play-circle play-music"/>
        </a>
      </li>
    )
  }
}

/*
 * Play Track Buffered
 */
class Buffered extends React.Component {
  render () {
    return (
      <div className="holder">
        <div className="demo">
          <div className="rkmd-slider slider-continuous slider-shadow slider-lightBlue slider-light" id="music-rock">
            <input type="range" min="0" max="175"/>
            <div className="slider">
              <div className="slider-fill"/>
              <div className="slider-handle"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/*
 * Play Track CurrentTime
 */
class CurrentTime extends React.Component {
  render () {
    return (
      <li className="nav-item active">
        <a className="nav-link" href="#" id="currentTime">00:00</a>
      </li>
    )
  }
}

/*
 * Play Track Backward
 */
class Backward extends React.Component {
  render () {
    return (
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="far fa-backward"/>
        </a>
      </li>
    )
  }
}

/*
 * Play Track Forward
 */
class Forward extends React.Component {
  render () {
    return (
      <li className="nav-item">
        <a className="nav-link">
          <i className="far fa-forward"/>
        </a>
      </li>
    )
  }
}

/*
 * Play Track Duration
 */
class Duration extends React.Component {

  render () {
    return (
      <li className="nav-item active">
        <a className="nav-link" id="durationTime">00:00</a>
      </li>
    )
  }
}

/*
 * Track Volume Music
 */
class Volume extends React.Component {
  render () {
    return (
      <li className="nav-item">
        <a className="nav-link">
          <i className="fal fa-volume-up fa-lg" id="volume-icon"/>
        </a>
      </li>
    )
  }
}

/*
 * Track Volume Music Range
 */
class VolumeRange extends React.Component {
  constructor (props) {
    super(props)

    this.progressMusic = null
    this.progressMusicAnimation = null
  }

  componentDidMount() {
    this.progressMusic = document.getElementsByClassName('slider-fill')[1]
    this.progressMusicAnimation = document.getElementsByClassName('slider-handle')[1]

    //Volume Start
    this.progressMusic.style.width = '100%'
    this.progressMusicAnimation.style.left = '100%'
    this.volume()
  }

  volume() {
    this.progressMusicAnimation.addEventListener('mousedown', () => {
      alert('Luis')
    })
  }

  render () {
    return (
      <li className="nav-item">
        <a className="nav-link">
          <div className="holder volume-rocka3">
            <div className="demo">
              <div className="rkmd-slider slider-continuous slider-shadow slider-lightBlue slider-ligh"
                   id="volumen-rock">
                <input ref={'volume'} type="range" min="0" max="100"/>

                <div className="slider volume-music-slider">
                  <div className="slider-fill"/>
                  <div className="slider-handle"/>
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
    )
  }
}

/*
 * Track Artist Image
 */
class Artist extends React.Component {
  render () {
    return (
      <li className="nav-item">
        <a className="nav-link">
          <img src="../assets/media/rocka3.png" width="50" className="rounded img-rounded shadow"/>
        </a>
      </li>
    )
  }
}

/*
 * Track Artist
 */
class ArtistTrack extends React.Component {
  render () {
    return (
      <li className="nav-item">
        <a className="nav-link">
          <span className="rocka3--music--name">
            ROCKA 3 - Que es lo que tu quieres mi Baby
          </span>
        </a>
      </li>
    )
  }
}

/*
 * Player App Module
 */
class MusicPlayer extends React.Component {
  render () {
    return (
      <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-rocka3-primary rocka3--menu-reproductor">
        <Buffered/>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mx-auto">
            <CurrentTime/>
            <Backward/>
            <Play/>
            <Forward/>
            <Duration/>
            <Volume/>
            <VolumeRange/>
            <Artist/>
            <ArtistTrack/>
          </ul>
        </div>
      </nav>
    )
  }
}

/*
 * Music Player App
 */
ReactDOM.render(
  <MusicPlayer music={''}/>,
  document.getElementById('music-player')
)