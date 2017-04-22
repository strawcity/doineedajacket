$(function() {
  $('#colorselector').change(function(){
    // $('.suggestions').hide();
    // $('#' + $(this).val()).fadeIn(2450);
    // $('#' + $(this).val()).parent().width() / 2 - $('#' + $(this).val()).width() / 2
    var sugEl = document.querySelector('#' + $(this).val());
    console.log(sugEl);

    //Animate whol div
    // dynamics.animate(document.querySelector('#' + $(this).val()), {
    //   translateX: $(jacketImage).parent().width() / 2 - $(jacketImage).width() / 2,
    //   opacity: 1,
    //   scale: 1
    // }, {
    //   type: dynamics.spring,
    //   duration: 2450,
    //   friction: 640
    // })

    animateImg(sugEl);
    animateTitle(sugEl);

  });

  function animateImg(selectedJacket) {
      var jacketImage = (selectedJacket.querySelector('img'));

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
  }

  function animateTitle(selectedJacket) {
      var jacketTitle = (selectedJacket.querySelector('h2'));

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
  }

});

function jacketSwitcher(suggestion){
    $('.suggestions').hide();
    $('#' + suggestion).show();
};
