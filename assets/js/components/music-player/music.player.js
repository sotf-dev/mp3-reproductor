/*
 * Play Track
 */
class Play extends React.Component {
  constructor() {
    super();
    this.audio = null;
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    this.audio = new Audio();
    this.audio.src = '../assets/media/audio2.mp3';
  }

  play() {
    const play_icon = document.querySelector('#play i');
    const currentTime = document.getElementById('currentTime');
    const durationTime = document.getElementById('durationTime');
    const progressMusic = document.getElementsByClassName('slider-fill')[0];
    const progressMusicAnimation = document.getElementsByClassName('slider-handle')[0];
    let buffered = 0;

    if (play_icon.classList.contains('fa-play-circle')) {
      play_icon.classList.remove('fa-play-circle');
      play_icon.classList.add('fa-pause-circle');

      if (this.audio.play()) {
        durationTime.innerHTML = this.audioTimer(this.audio.duration);
        let timer = setInterval(() => {
          buffered = Math.floor(this.audio.currentTime) / Math.floor(this.audio.duration) * 100;
          currentTime.innerHTML = this.audioTimer(this.audio.currentTime);
          progressMusic.style.width = buffered + '%';
          progressMusicAnimation.style.left = buffered + '%';

          if (this.audio.currentTime === this.audio.duration) {
            progressMusic.style.width = '0%';
            progressMusicAnimation.style.left = '0%';
            currentTime.innerHTML = '00:00';
            play_icon.classList.remove('fa-pause-circle');
            play_icon.classList.add('fa-play-circle');
            this.audio.pause();
            clearInterval(timer);
          }
        }, 1000);
      }
    } else {
      this.audio.pause();
      play_icon.classList.remove('fa-pause-circle');
      play_icon.classList.add('fa-play-circle');
    }
  }

  audioTimer(timer) {
    let hr = Math.floor(timer / 3600);
    let min = Math.floor((timer - hr * 3600) / 60);
    let sec = Math.floor(timer - hr * 3600 - min * 60);

    if (min < 10) {
      min = '0' + min;
    }

    if (sec < 10) {
      sec = '0' + sec;
    }

    return min + ':' + sec;
  }

  render() {
    return React.createElement("li", {
      className: "nav-item active"
    }, React.createElement("a", {
      className: "nav-link",
      href: "#",
      id: "play",
      onClick: this.play
    }, React.createElement("i", {
      className: "fal fa-play-circle play-music"
    })));
  }

}
/*
 * Play Track Buffered
 */


class Buffered extends React.Component {
  render() {
    return React.createElement("div", {
      className: "holder"
    }, React.createElement("div", {
      className: "demo"
    }, React.createElement("div", {
      className: "rkmd-slider slider-continuous slider-shadow slider-lightBlue slider-light",
      id: "music-rock"
    }, React.createElement("input", {
      type: "range",
      min: "0",
      max: "175"
    }), React.createElement("div", {
      className: "slider"
    }, React.createElement("div", {
      className: "slider-fill"
    }), React.createElement("div", {
      className: "slider-handle"
    })))));
  }

}
/*
 * Play Track CurrentTime
 */


class CurrentTime extends React.Component {
  render() {
    return React.createElement("li", {
      className: "nav-item active"
    }, React.createElement("a", {
      className: "nav-link",
      href: "#",
      id: "currentTime"
    }, "00:00"));
  }

}
/*
 * Play Track Backward
 */


class Backward extends React.Component {
  render() {
    return React.createElement("li", {
      className: "nav-item"
    }, React.createElement("a", {
      className: "nav-link",
      href: "#"
    }, React.createElement("i", {
      className: "far fa-backward"
    })));
  }

}
/*
 * Play Track Forward
 */


class Forward extends React.Component {
  render() {
    return React.createElement("li", {
      className: "nav-item"
    }, React.createElement("a", {
      className: "nav-link"
    }, React.createElement("i", {
      className: "far fa-forward"
    })));
  }

}
/*
 * Play Track Duration
 */


class Duration extends React.Component {
  render() {
    return React.createElement("li", {
      className: "nav-item active"
    }, React.createElement("a", {
      className: "nav-link",
      id: "durationTime"
    }, "00:00"));
  }

}
/*
 * Track Volume Music
 */


class Volume extends React.Component {
  render() {
    return React.createElement("li", {
      className: "nav-item"
    }, React.createElement("a", {
      className: "nav-link"
    }, React.createElement("i", {
      className: "fal fa-volume-up fa-lg",
      id: "volume-icon"
    })));
  }

}
/*
 * Track Volume Music Range
 */


class VolumeRange extends React.Component {
  render() {
    return React.createElement("li", {
      className: "nav-item"
    }, React.createElement("a", {
      className: "nav-link"
    }, React.createElement("div", {
      className: "holder volume-rocka3"
    }, React.createElement("div", {
      className: "demo"
    }, React.createElement("div", {
      className: "rkmd-slider slider-continuous slider-shadow slider-lightBlue slider-ligh",
      id: "volumen-rock"
    }, React.createElement("input", {
      type: "range",
      min: "0",
      max: "100"
    }), React.createElement("div", {
      className: "slider volume-music-slider"
    }, React.createElement("div", {
      className: "slider-fill"
    }), React.createElement("div", {
      className: "slider-handle"
    })))))));
  }

}
/*
 * Track Artist Image
 */


class Artist extends React.Component {
  render() {
    return React.createElement("li", {
      className: "nav-item"
    }, React.createElement("a", {
      className: "nav-link"
    }, React.createElement("img", {
      src: "../assets/media/rocka3.png",
      width: "50",
      className: "rounded img-rounded shadow"
    })));
  }

}
/*
 * Track Artist
 */


class ArtistTrack extends React.Component {
  render() {
    return React.createElement("li", {
      className: "nav-item"
    }, React.createElement("a", {
      className: "nav-link"
    }, React.createElement("span", {
      className: "rocka3--music--name"
    }, "ROCKA 3 - Que es lo que tu quieres mi Baby")));
  }

}
/*
 * Player App Module
 */


class MusicPlayer extends React.Component {
  render() {
    return React.createElement("nav", {
      className: "navbar fixed-bottom navbar-expand-sm navbar-dark bg-rocka3-primary rocka3--menu-reproductor"
    }, React.createElement(Buffered, null), React.createElement("div", {
      className: "collapse navbar-collapse",
      id: "navbarCollapse"
    }, React.createElement("ul", {
      className: "navbar-nav mx-auto"
    }, React.createElement(CurrentTime, null), React.createElement(Backward, null), React.createElement(Play, null), React.createElement(Forward, null), React.createElement(Duration, null), React.createElement(Volume, null), React.createElement(VolumeRange, null), React.createElement(Artist, null), React.createElement(ArtistTrack, null))));
  }

}
/*
 * Music Player App
 */


ReactDOM.render(React.createElement(MusicPlayer, null), document.getElementById('music-player'));