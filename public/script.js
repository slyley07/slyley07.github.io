$(document).ready(function(){
  $(document).scroll(function() {
    var y = $(this).scrollTop();

    if (y > 100) {
      $('.top').fadeIn(500);
    }

    if (y > 500) {
      $('.middle').slideDown(500);
    }

    if (y > 800) {
      $('.wrapLeft').css({
            display: "inline-block"
          }).show("slide", { direction: "right" }, 1000);
      $('.wrapRight').css ({
            display: "inline-block"
          }).show("slide", {direction: "left"}, 1000);
    }

    if (y > 1200) {
      $('.megaBottom .projectsHead').slideDown(500);
      // console.log('works');
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
})
