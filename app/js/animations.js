  function pageInitAnimation() {
      $('.loader').animate({opacity: 1}, 'slow');
  };

  function pageTitleAnimation() {
      var titleSection = $('.title-section');
      $('.title-section').addClass('minified');
      $('.loader').fadeOut();
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
      var offsetHeight =  $('#bg-gradient-mobile').height() + $('.temp-card').height()  + $('.tweet-link-mobile').height() + 60;
      var mobileTempBox = (document.querySelector('.temp-card-mobile'));

      $('#bg-gradient-mobile').css("height", offsetHeight);

      dynamics.animate(mobileTempBox, {
        translateY: 230,
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
