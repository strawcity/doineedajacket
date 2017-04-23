


  $('#colorselector').change(function(){
    // $('.suggestion').hide();

    var sugEl = document.querySelector('#' + $(this).val());
    animateImgIn(sugEl);
    animateTitleIn(sugEl);
  });

  function animateImgIn(selectedJacket) {
      var jacketImage = (selectedJacket.querySelector('.jacket__image'));

      //Animate jacket image
      dynamics.animate(jacketImage, {
        translateX: $(jacketImage).parent().width() / 2 - $(jacketImage).width() / 2 + 15,
        opacity: 1,
        scale: 1
      }, {
        type: dynamics.spring,
        duration: 1050,
        frequency: 75,
        friction: 340
      })
  };

  function animateTitleIn(selectedJacket) {
      var jacketTitle = (selectedJacket.querySelector('.jacket__title'));

      //Animate jacket image
      dynamics.animate(jacketTitle, {
        translateX: $(jacketTitle).parent().width() / 2 - $(jacketTitle).width() / 2 + 15,
        opacity: 1,
        scale: 1
      }, {
        type: dynamics.spring,
        duration: 1350,
        frequency: 75,
        friction: 520
      })
  };


  function pageTitleAnimation() {
      console.log('ran');
      var titleSection = (document.querySelector('.title-section'));

      $('.title-section').addClass('minified');
      //
    //   dynamics.animate(titleSection, {
    //     translateX: ($(titleSection).parent().width() / 2 - $(titleSection).width()/4) * -1,
    //     translateY: ($(titleSection).parent().height() / 2) * -1,
    //     scale: 0.35
    //   }, {
    //       type: dynamics.spring,
    //       duration: 675,
    //       frequency: 23,
    //       friction: 207
    //   })
  };

  function suggestionJacketAnimation() {
      var titleSection = (document.querySelector('.suggestion'));
      var translateX = (document.querySelector('.body-container'));
      console.log($(translateX).width());

      dynamics.animate(titleSection, {
        translateX: $(translateX).width() + 15,
        // translateY: ($(titleSection).parent().height() / 2) * -1
      }, {
          type: dynamics.spring,
          duration: 750,
          frequency: 23,
          friction: 207
      })
  };
