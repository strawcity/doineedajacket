  function pageTitleAnimation() {
      var titleSection = (document.querySelector('.title-section'));
      $('.title-section').addClass('minified');
  };

  function suggestionJacketAnimation() {
      var titleSection = (document.querySelector('.suggestion'));
      var translateX = (document.querySelector('.body-container'));
      dynamics.animate(titleSection, {
        translateX: 2030,
      }, {
          type: dynamics.spring,
          duration: 1000,
          frequency: 23,
          friction: 207
      })
  };

  function tempBoxAnimation() {
      var tempBox = (document.querySelector('.temp-box'));
      dynamics.animate(tempBox, {
        translateX: -330,
      }, {
          type: dynamics.spring,
          duration: 750,
          frequency: 23,
          friction: 207
      })
  };

  function tweetLinkAnimation() {
      var tweetLink = (document.querySelector('.tweet-link'));
      console.log('temp');
      dynamics.animate(tweetLink, {
        translateY: -55,
      }, {
          type: dynamics.spring,
          duration: 750,
          frequency: 23,
          friction: 207
      })
  };
