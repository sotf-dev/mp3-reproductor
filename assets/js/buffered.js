$(document).ready(function() {
  $('.rkmd-slider').Buffered();
});

/* Range Slider Function */
(function($) {

  $.fn.Buffered = function() {
    let self, curnt, sliderContinuous, range, slider;
    let volume = false;
    self = $(this);

    self.on('mousedown', '.slider-handle', function(e) {
      if(e.button === 2) {
        return false;
      }

      let compare =  e

      console.log(e.delegateTarget.id)

      const parents       = $(this).parents('.rkmd-slider');
      const slider_width  = parents.outerWidth();
      const slider_offset = parents.offset().left;
      const check_range   = parents.find('input[type="range"]').is(':disabled');

      if(check_range === true) {
        return false;
      }

      const handlers = {
        mousemove: function(e) {
          const slider_new_width = e.pageX - slider_offset;

          if(slider_new_width <= slider_width && !(slider_new_width < '0')) {
            if(compare.delegateTarget.id === 'volumen-rock') {
              volumeRock(parents, slider_new_width, slider_width);
            } else {
              slider_move(parents, slider_new_width, slider_width);
            }
          }
        },
        mouseup: function(e) {
          $(this).off(handlers);
          volume = false
        }
      };
      $(document).on(handlers);
    });
  };

  const sliderContinuous_tmplt = () => {
    const tmplt = '<div class="slider">' +
      '<div class="slider-fill"></div>' +
      '<div class="slider-handle"></div>' +
      '</div>';

    return tmplt;
  }

  const slider_move = (parents, newW, sliderW) => {
    const slider_new_val = parseInt(Math.round(newW / sliderW * 100));

    const slider_fill    = parents.find('.slider-fill');
    const slider_handle  = parents.find('.slider-handle');
    const range          = parents.find('input[type="range"].music');

    slider_fill.css('width', slider_new_val +'%');
    slider_handle.css({
      'left': slider_new_val +'%',
      'transition': 'none',
      '-webkit-transition': 'none',
      '-moz-transition': 'none'
    });

    range.val(slider_new_val);
    console.log(audioTimer(slider_new_val))
  }

  const volumeRock = (parents, newW, sliderW) => {
    const volume = parseInt(Math.round(newW / sliderW * 100));
    const slider_fill    = parents.find('.slider-fill');
    const slider_handle  = parents.find('.slider-handle');
    const range          = parents.find('input[type="range"].volumen');
    const audio = document.getElementById('audio')
    const volume_icon = document.getElementById('volume-icon')

    slider_fill.css('width', volume +'%');
    slider_handle.css({
      'left': volume +'%',
      'transition': 'none',
      '-webkit-transition': 'none',
      '-moz-transition': 'none'
    });

    range.val(volume);

    if(parents.hasClass('slider-discrete') === true) {
      parents.find('.slider-handle span').text(volume);
    }

    if (volume < 3) {
      volume_icon.classList.remove('fa-volume-up')
      volume_icon.classList.add('fa-volume-mute')
      audio.volume = '0.0'
    }
    else if (volume > 3) {
      volume_icon.classList.remove('fa-volume-mute')
      volume_icon.classList.add('fa-volume-up')
      audio.volume = (volume / 100)
    }
  }

  const audioTimer = (timer) => {
    let hr  = Math.floor(timer / 3600);
    let min = Math.floor((timer - (hr * 3600))/60);
    let sec = Math.floor(timer - (hr * 3600) -  (min * 60));

    if (min < 10) { min = "0" + min; }
    if (sec < 10) { sec  = "0" + sec; }
    return min + ':' + sec;
  }

}(jQuery));
