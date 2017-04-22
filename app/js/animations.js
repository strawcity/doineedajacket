  function jacketSwitcher(suggesiton){
    var sugEl = document.querySelector('#' + suggesiton);
    animateImgIn(sugEl);
    animateTitleIn(sugEl);
  };

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
      }, {
        type: dynamics.spring,
        duration: 1350,
        frequency: 75,
        friction: 520
      })
  };
