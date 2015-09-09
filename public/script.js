$(document).ready(function(){
  $(document).scroll(function() {
    var y = $(this).scrollTop();

    if (y > 100) {
      $('.top').slideDown(500);
    }

    if (y > 500) {
      $('.middle').slideDown(500);
    }

    if (y > 800) {
      $('.bottom').slideDown(500);
      // $('.wrapLeft').css({
      //       display: "inline-block"
      //     }).show("slide", { direction: "right" }, 1000);
      // $('.wrapRight').css({
      //       display: "inline-block"
      //     }).show("slide", {direction: "left"}, 1000);
    }

    if (y > 1200) {
      $('.megaBottom .projectsHead').slideDown(500);
    }

    if (y > 1500) {
      $('.datamapper').show('slide', {direction: 'left'}, 1000);
    }

    if (y > 1800) {
      $('.sule').show('slide', {direction: 'right'}, 1000);
    }

    if (y > 2100) {
      $('.zap').show('slide', {direction: 'left'}, 1000);
    }

    if (y > 2500) {
      $('footer'). slideDown(500);
      $('.downArrow').hide('slide', {direction: 'up'}, 500);
    }
  });

  $('[data-popup-open]').click(function(e){
    var targeted_popup_class = $(this).attr('data-popup-open');
    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

    e.preventDefault();
  })

  $('[data-popup-close]').click(function(e) {
    var targeted_popup_class = $(this).attr('data-popup-close');
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    e.preventDefault();
  })
})
