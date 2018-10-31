/* -----------------------------------------------------
  Material Design Sliders
  CodePen URL: https://codepen.io/rkchauhan/pen/xVGGpR
  By: Ravikumar Chauhan

  Find me on:-
  * Twitter: https://twitter.com/rkchauhan01
  * Facebook: https://www.facebook.com/ravi032chauhan
  * GitHub: https://github.com/rkchauhan
  * CodePen: https://codepen.io/rkchauhan
  * UpLabs: http://uplabs.com/rkchauhan01

  Thanks to:-
  * Google Material design - https://www.google.com/design/spec/material-design/introduction.html
  * Google Material Color - https://www.google.com/design/spec/style/color.html
  * Google Material Icons - https://design.google.com/icons/
  * Roboto Font - https://google.com/fonts/specimen/Roboto
  * jQuery - https://jquery.com
-------------------------------------------------------- */
$(document).ready(function() {
  $('.rkmd-slider').rkmd_rangeSlider();
});

/* Range Slider Function */
(function($) {

  $.fn.rkmd_rangeSlider = function() {
    let self, curnt, sliderContinuous, range, slider;
    let volume = false;
    self = $(this);

    sliderContinuous = $('.slider-continuous');
    if(self.hasClass('slider-continuous') === true) {

      sliderContinuous.each(function(i, v) {
        curnt         = $(this);
        curnt.append(sliderContinuous_tmplt());
        range         = curnt.find('input[type="range"]');
        slider        = curnt.find('.slider');
        slider_fill   = slider.find('.slider-fill');
        slider_handle = slider.find('.slider-handle');

        const range_val = range.val();
        slider_fill.css('width', range_val +'%');
        slider_handle.css('left', range_val +'%');

      });
    }

    self.on('mousedown', '.slider-handle', function(e) {
      if(e.button === 2) {
        return false;
      }

      if ($(this).parents('.volume')) {
        volume = true
      }

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
         // alert('Move')

          if(slider_new_width <= slider_width && !(slider_new_width < '0')) {
            if(volume) {
              volumeRock(parents, slider_new_width, slider_width);
            } else {
              slider_move(parents, slider_new_width, slider_width);
            }
          }
        },
        mouseup: function(e) {
          $(this).off(handlers);
        }
      };
      $(document).on(handlers);
    });

    self.on('mousedown', '.slider', function(e) {
      if(e.button === 2) {
        return false;
      }

      const parents       = $(this).parents('.rkmd-slider');
      const slider_width  = parents.outerWidth();
      const slider_offset = parents.offset().left;
      const check_range   = parents.find('input[type="range"]').is(':disabled');

      if(check_range === true) {
        return false;
      }

      const slider_new_width = e.pageX - slider_offset;
      if(slider_new_width <= slider_width && !(slider_new_width < '0')) {
        slider_move(parents, slider_new_width, slider_width);
      }

      const handlers = {
        mouseup: function(e) {
          $(this).off(handlers);
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
    const range          = parents.find('input[type="range"]');

    slider_fill.css('width', slider_new_val +'%');
    slider_handle.css({
      'left': slider_new_val +'%',
      'transition': 'none',
      '-webkit-transition': 'none',
      '-moz-transition': 'none'
    });

    range.val(slider_new_val);

    if(parents.hasClass('slider-discrete') === true) {
      parents.find('.slider-handle span').text(slider_new_val);
    }
  }


  const volumeRock = (parents, newW, sliderW) => {
    const volume = parseInt(Math.round(newW / sliderW * 100));
    const slider_fill    = parents.find('.slider-fill');
    const slider_handle  = parents.find('.slider-handle');
    const range          = parents.find('input[type="range"]');
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

}(jQuery));
