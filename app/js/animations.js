  function pageTitleAnimation() {
      var titleSection = (document.querySelector('.title-section'));
      $('.title-section').addClass('minified');
  };

  function suggestionJacketAnimation() {
      var titleSection = (document.querySelector('.suggestion'));
      var translateX = (document.querySelector('.body-container'));
      dynamics.animate(titleSection, {
        translateX: 2015,
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
        translateX: -335,
      }, {
          type: dynamics.spring,
          duration: 1250,
          frequency: 23,
          friction: 207
      })
  };

  function mobileTempBoxAnimation() {
      var bgGradientHeight = $('#bg-gradient').height() + $('.suggestion__jacket').height();
      var mobileTempBox = (document.querySelector('.temp-card-mobile'));

      $('#bg-gradient').css("height", bgGradientHeight);

      console.log($('#bg-gradient').height());

      dynamics.animate(mobileTempBox, {
        translateY: 210,
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
        opacity: 1,
      }, {
          type: dynamics.spring,
          duration: 1250,
          frequency: 23,
          friction: 207
      })
  };

  $("#card-flipper").flip({trigger: 'click'});
  $("#card-flipper-mobile").flip({trigger: 'click'});
