  function pageInitAnimation() {
      $('.loader').animate({opacity: 1}, 'slow');
  };

  function pageTitleAnimation() {
      var titleSection = $('.title-section');
      $('.title-section').addClass('minified');
      $('#loading').hide();
  };

  function suggestionJacketAnimation() {
      var titleSection = (document.querySelector('.suggestion'));
      var translateX = (document.querySelector('.body-container'));
      $('#intro-quesiton-mark').show();
      dynamics.animate(titleSection, {
        translateX: 2000,
      }, {
          type: dynamics.spring,
          duration: 1000,
          frequency: 23,
          friction: 207
      })
  };

  function tempBoxAnimation() {
      var tempBox = (document.querySelector('.temp-card'));
      dynamics.animate(tempBox, {
        translateX: -367,
      }, {
          type: dynamics.spring,
          duration: 1250,
          frequency: 23,
          friction: 207
      })
  };

  function mobileTempBoxAnimation() {
      var offsetHeight = 367 + (-Math.abs($('#bg-gradient-mobile').height()));
      var mobileTempBox = (document.querySelector('.temp-card-mobile'));

      $('.temp-box').show().css("width", "94%");

      dynamics.animate(mobileTempBox, {
        translateY: offsetHeight,
      }, {
          type: dynamics.spring,
          duration: 1250,
          frequency: 23,
          friction: 207
      })
  };

  function tweetLinkAnimation() {
      var tweetLink = (document.querySelector('.tweet-link'));
      dynamics.animate(tweetLink, {
        translateY: -55,
      }, {
          type: dynamics.spring,
          duration: 750,
          frequency: 23,
          friction: 207
      })
  };

  function mobileTweetLinkAnimation() {
      var mobileTweetLink = (document.querySelector('.tweet-link-mobile'));
      dynamics.animate(mobileTweetLink, {
        opacity: 0.7,
      }, {
          type: dynamics.spring,
          duration: 2250,
          frequency: 23,
          friction: 207
      })
  };

  $("#card-flipper").flip({trigger: 'click'});
  $("#card-flipper-mobile").flip({trigger: 'click'});
