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
          duration: 750,
          frequency: 23,
          friction: 207
      })
  };

  function tempBoxAnimation() {
      var tempBox = (document.querySelector('.temp-box'));
      var translateX = (document.querySelector('.body-container'));
      console.log('temp');
      dynamics.animate(tempBox, {
        translateX: -315,
      }, {
          type: dynamics.spring,
          duration: 750,
          frequency: 23,
          friction: 207
      })
  };
