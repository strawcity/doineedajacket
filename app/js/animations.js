
  function jacketSwitcher(suggesiton){
    var sugEl = document.querySelector('#' + suggesiton);

    pageTitleAnimation();
    animateImgIn(sugEl);
    animateTitleIn(sugEl);

  };

  $('#colorselector').change(function(){
    // $('.suggestions').hide();

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
      var titleSection = (document.querySelector('.title-section'));
      console.log($(titleSection).parent().width());
      console.log($(titleSection).width());
    //   console.log(($(titleSection).parent().width() / 2 - $(titleSection).width()/2) * -1);

      //Animate jacket image
      dynamics.animate(titleSection, {
        translateX: ($(titleSection).parent().width() / 2 - $(titleSection).width()/4) * -1,
        translateY: ($(titleSection).parent().height() / 2) * -1,
        scale: 0.4
      }, {
          type: dynamics.spring,
          duration: 557,
          frequency: 23,
          friction: 207
      })
  };
