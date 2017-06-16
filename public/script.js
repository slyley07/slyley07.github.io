var projects = [
    // {
    //   "name": "Zap",
    //   "className": "zap",
    //   "desc": "Batman vs Superman! Captain America vs Ironman! With this simple microblog you can talk about your favorite superheroes with all of your comic book friends.",
    //   "github": "https://github.com/slyley07/zap",
    //   "images": [
    //     "zap.png"
    //   ],
    //   "languages": [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "Bourbon",
    //     "Ruby",
    //     "Rails"
    //   ],
    //   "website": null
    // },
    // {
    //   "name": "Sule",
    //   "className": "sule",
    //   "desc": "Are you tired of how fast-paced the world is? Use this interactive capsule site, to save your memories and have a loved one open them upon a set date.",
    //   "github": "https://github.com/slyley07/sule",
    //   "images": [
    //     "sule2.png"
    //   ],
    //   "languages": [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "Bourbon",
    //     "Ruby",
    //     "Rails"
    //   ],
    //   "website": null
    // },
    {
      "name": "Chalogy Beauty",
      "className": "chalogy",
      "desc": "A new makeup and beauty line from Chalogy in South Korea. My main focuses were implementing the shopping cart functionality, creating the Saturday Skin brand and ingredients pages, and the About and Innovation pages.",
      "github": null,
      "images": [
        "chalogy_1.png",
        "chalogy_2.png",
        "chalogy_4.png",
        "chalogy_5.png"
      ],
      "languages": [
        "HTML",
        "CSS",
        "JavaScript",
        "Angular",
        "SASS",
        "Shopify"
      ],
      "website": "http://chalogybeauty.com/"
    },
    {
      "name": "Ask Dr. Apa",
      "className": "askdrapa",
      "desc": "A blog for Dr. Michael Apa, who travels the world helping people find their brightest smiles. I built the entire website following designs provided by a graphic designer and hosted it with Wordpress.",
      "github": null,
      "images": [
        "askdrapa_1.png",
        "askdrapa_2.png"
      ],
      "languages": [
        "HTML",
        "CSS",
        "JavaScript",
        "Wordpress"
      ],
      "website": "http://www.askdrapa.com/"
    },
    {
      "name": "Now New York",
      "className": "nny",
      "desc": "The website and corresponding Chrome extension, built and designed completely from scratch with my coworker. My main focuses were the weather, to-do, links, news, and settings modules. Both the website and the extension use the same languages.",
      "github": null,
      "images": [
        "nny_1.png",
        "nny_2.png"
      ],
      "languages": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "website": "http://now-newyork.com/"
    },
    {
      "name": "Flirt",
      "className": "flirt",
      "desc": "Landing pages for the new Flirt Flashes campaign by Est&eacute;e Lauder. I built the sites from scratch for a mobile-only audience following designs provided to me.",
      "github": null,
      "images": [
        "flirt_1.png",
        "flirt_2.png"
      ],
      "languages": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "website": "http://flashes.flirtcosmetics.com/"
    },
    {
      "name": "Platey",
      "className": "platey",
      "desc": "A simple weight calculator for figuring out which plates to put on a barbell at the gym. Built and designed by myself.",
      "github": "https://github.com/slyley07/platey",
      "images": [
        "platey_1.png"
      ],
      "languages": [
        "HTML",
        "CSS",
        "JavaScript",
        "Chrome Storage"
      ],
      "website": "http://botanybrad.com/platey/platey.html"
    },


    // {
    //   "name": "Design+Shop",
    //   "className": "dplusshop",
    //   "desc": "The shop for CMYK+White. I maintain and update the site, adding in new pages and features as requested.",
    //   "github": null,
    //   "images": [
    //     null
    //   ],
    //   "languages": [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "Shopify"
    //   ],
    //   "website": "https://www.designplusshop.com/"
    // },



    {
      "name": "Datamapper",
      "className": "datamapper",
      "desc": "A site for earth scientists to post the plots that their data are taken from and collaborate with other scientists. This implements the Google Maps API, JavaScript, and AJAX so each user's plot is saved immediately and dynamically.",
      "github": "https://github.com/slyley07/datamapper",
      "images": [
        "datamapper2.png"
      ],
      "languages": [
        "HTML",
        "CSS",
        "JavaScript",
        "Bourbon",
        "Ruby",
        "Rails"
      ],
      "website": null
    }
  ];

var proj_imgs = function(i, flag) {
  console.log('src');
  var img = document.getElementById('modal_img_' + i);
  var src = img.src;
  console.log(src);

  //local
  var sub_str = 'file:///Users/bradley/Desktop/projects/personal/slyley07.github.io/public/images/projects/'

  //local
  var index = projects[i].images.indexOf(src.replace(sub_str, ''));

  //online
  // var index = projects[i].images.indexOf(src);


  if (index + 1 === projects[i].images.length && flag === 'right') {
    img.src = sub_str + projects[i].images[0];
  } else if (index + 1 < projects[i].images.length && flag === 'right') {
    img.src = sub_str + projects[i].images[index + 1];
  } else if (index - 1 === -1 && flag === 'left') {
    img.src = sub_str + projects[i].images[projects[i].images.length - 1];
  } else if (index - 1 >= 0 && flag === 'left') {
    img.src = sub_str + projects[i].images[index - 1];
  }
}

var dir = function() {
  var directions = ['up', 'down', 'left', 'right'];
  var index = Math.floor(Math.random() * (4 - 1)) + 1;

  return directions[index];
}


$(document).ready(function(){
  var onces = 0;
  var x;

  if ($(window).width() > 767) {
    x = 1300;
    console.log('large');
  } else if ($(window).width() < 766) {
    console.log('small');
    // x = 1000;
    //
    // $('.downArrow').click(function() {
    //   alert('clicked')
    //   $(window).scrollTop(100);
    // })
  }

  $(document).scroll(function() {
    var y = $(this).scrollTop();

    if (y > 100) {
      $('.top').slideDown(500);
      if (onces === 0) {
        initMap();
        onces++;
      }
    }

    if (y > 500) {
      $('.middle').slideDown(500);
    }

    if (y > 800) {
      $('.bottom').slideDown(500);
    }

    if (y > 1000) {
      $('.megaBottom, .projectsHead').slideDown();
    }

    for (var p = 0; p < projects.length; p++) {
      if (y > x && $('.' + projects[p].className + '_outer').not(':visible') && p !== 2 && p !== 3 && p !== 4 && p !== 5) {
        $('.' + projects[p].className + '_outer').show(
          'slide',
          {
            direction: dir()
          },
          1000
        );
        x += 350;
      } else if (y > 1650 && $('.' + projects[p].className + '_outer').not(':visible') && p === 2) {
        $('.' + projects[p].className + '_outer').show(
          'slide',
          {
            direction: dir()
          },
          1000
        );
        // x += 350;
      } else if (y > 2000 && $('.' + projects[p].className + '_outer').not(':visible') && p === 3 && p !== 4 && p !== 5) {
        // $('.megaBottom .project_holder').css({
        //   'grid-template-rows': '94px 1fr 1fr 1fr 1fr'
        // });

        $('.' + projects[p].className + '_outer').show(
          1000
        );
      } else if (y > 2200 && $('.' + projects[p].className + '_outer').not(':visible')) {
        $('.' + projects[p].className + '_outer').show(
          'slide',
          {
            direction: 'down'
          },
          1000
        );
      }
    }

    var z = 1300 + (350 * (projects.length - 2));
    if (y > z) {
      $('footer'). slideDown(500);
      $('.downArrow').hide('slide', {direction: 'up'}, 500);
      $('body').css({
        'height': 'auto'
      });
    }
  });

  // $('.downArrow').click(function() {
  //   // var y = $(this).scrollTop();
  //   //
  //   // if (y > 100) {
  //     $('.top').slideDown(500);
  //     if (onces === 0) {
  //       initMap();
  //       onces++;
  //     }
  //   // }
  //
  //   if (y > 500) {
  //     $('.middle').slideDown(500);
  //   }
  //
  //   if (y > 800) {
  //     $('.bottom').slideDown(500);
  //     // $('.wrapLeft').css({
  //     //       display: "inline-block"
  //     //     }).show("slide", { direction: "right" }, 1000);
  //     // $('.wrapRight').css({
  //     //       display: "inline-block"
  //     //     }).show("slide", {direction: "left"}, 1000);
  //   }
  //
  //   if (y > 1000) {
  //     $('.megaBottom, .projectsHead').slideDown();
  //   }
  //
  //   var x = 1300;
  //
  //   for (var p = 0; p < projects.length; p++) {
  //     if (y > x && $('.' + projects[p].className + '_outer').not(':visible') && p !== 2 && p !== 3 && p !== 4 && p !== 5) {
  //       $('.' + projects[p].className + '_outer').show(
  //         'slide',
  //         {
  //           direction: dir()
  //         },
  //         1000
  //       );
  //       x += 350;
  //     } else if (y > 1650 && $('.' + projects[p].className + '_outer').not(':visible') && p === 2) {
  //       $('.' + projects[p].className + '_outer').show(
  //         'slide',
  //         {
  //           direction: dir()
  //         },
  //         1000
  //       );
  //       // x += 350;
  //     } else if (y > 2000 && $('.' + projects[p].className + '_outer').not(':visible') && p === 3 && p !== 4 && p !== 5) {
  //       // $('.megaBottom .project_holder').css({
  //       //   'grid-template-rows': '94px 1fr 1fr 1fr 1fr'
  //       // });
  //
  //       $('.' + projects[p].className + '_outer').show(
  //         1000
  //       );
  //     } else if (y > 2200 && $('.' + projects[p].className + '_outer').not(':visible')) {
  //       $('.' + projects[p].className + '_outer').show(
  //         'slide',
  //         {
  //           direction: 'down'
  //         },
  //         1000
  //       );
  //     }
  //   }
  //
  //   var z = 1300 + (350 * (projects.length - 2));
  //   if (y > z) {
  //     $('footer'). slideDown(500);
  //     $('.downArrow').hide('slide', {direction: 'up'}, 500);
  //   }
  // });

  for (var i = 0; i < projects.length; i++) {
    // make projects and append them to the megaBottom
    $('.project_holder').append(
      // project
      '<div class="' + projects[i].className + '_outer">' +
        '<div class="' + projects[i].className + '">' +
        '</div>'+
      '</div>' +

      // modal
      '<div class="popup ' + projects[i].className + '_sub" data-popup="popup-' + i + '">' +
        '<div class="popup-inner">' +
          '<a href="#" data-popup-close="popup-' + i + '" class="popup-class">' +
            '<img src="public/images/icons/x-8x.png" class="exit" alt="" />' +
          '</a>' +

          '<h3 class="header_' + i + '">' +
          '</h3>' +

          '<p>' +
            projects[i].desc +
          '</p>' +

          '<div class="languages">' +
          '</div>' +
        '</div>'+
      '</div>'
    );

    if (projects[i].website) {
      $('.header_' + i).append(
        '<a href="' + projects[i].website + '">' +
          projects[i].name +
        '</a>'
      )
    } else {
      $('.header_' + i).append(
        projects[i].name
      )
    }

    // push images to modal if project has multiple images
    if (projects[i].images.length > 1) {
      var cara =
      '<div class="full_cara">' +
        // left arrow
        '<div class="left">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" onclick="proj_imgs(' + i + ', ' + "'left'" + ')" class="pointer">' +
            '<path d="M4 0l-4 4 4 4v-8z" transform="translate(2)" />' +
          '</svg>' +
        '</div>' +

        // carousel image
        '<div class="cara_' + i + '">' +
        '</div>' +

        // right arrow
        '<div class="right">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" onclick="proj_imgs(' + i + ',' + "'right'"+ ')" class="pointer">' +
            '<path d="M0 0v8l4-4-4-4z" transform="translate(2)" />' +
          '</svg>' +
        '</div>'+
      '</div>'

      $(cara).insertAfter('.header_' + i)

      $('.cara_' + i).append(
        '<img src="public/images/projects/' + projects[i].images[0] + '" class="cara_img" id="modal_img_' + i + '">'
      )
    }


    $('.' + projects[i].className).addClass('grid_two');

    $('.' + projects[i].className).append(
      '<div>' +
      '</div>' +
      '<div class="plus_div_2">' +
        '<a href="#" class="btn" data-popup-open="popup-' + i + '">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">' +
            '<path d="M3 0v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" />' +
          '</svg>' +
        '</a>' +
      '</div>' +
      '<div>' +
      '</div>'
    )

    // add language icons to modal
    for (var l = 0; l < projects[i].languages.length; l++) {
      if (projects[i].languages[l] === "Chrome Storage") {
        $('.' + projects[i].className + '_sub .languages').append(
          '<img src="public/images/icons/chrome_storage_icon.png" class="chrome_storage" alt="' + projects[i].languages[l] + '" />'
        );
      } else {
        $('.' + projects[i].className + '_sub .languages').append(
          '<img src="public/images/icons/' + projects[i].languages[l].toLowerCase() + '_icon.png" class="' + projects[i].languages[l].toLowerCase() + '" alt="' + projects[i].languages[l] + '" />'
        );
      }
    }

    // add github link if one exists
    if (projects[i].github !== null) {
      $('.' + projects[i].className + '_sub .popup-inner').append(
        '<a href="' + projects[i].github + '">' +
          '<img src="public/images/icons/github_icon.png" class="kitty" alt="' + projects[i].Name + ' GitHub Repo" />' +
        '</a>'
      );
    }
  }

  $('[data-popup-open]').click(function(e){
    e.preventDefault();
    $('body').css({
      'overflow': 'hidden'
    })
    console.log('clicked');
    var targeted_popup_class = $(this).attr('data-popup-open');
    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

  });

  $('[data-popup-close]').click(function(e) {
    $('body').css({
      'overflow': 'visible'
    })
    var targeted_popup_class = $(this).attr('data-popup-close');
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    e.preventDefault();
  });

});
