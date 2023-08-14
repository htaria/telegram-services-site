/* ====== Top button ====== */
$(window).on('scroll', function () {
  if ($(this).scrollTop() >= 200) {
    $('#top').css({
      right: '20px'
    });
  } else {
    $('#top').css({
      right: '-80px'
    });
  }
});
 

jQuery(function () {
  $('#top').on('click', function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 10);
  });
});

/* ====== Works Tab ====== */
jQuery(function () {
  $('.all-btn').on('click', function (e) {
    e.preventDefault();
    $('div.site').show();
    $('div.app').show();
    $('div.poster').show();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });
  $('.bots-btn').on('click', function (e) {
    e.preventDefault();
    $('div.app').hide();
    $('div.poster').hide();
    $('div.site').show();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });
  $('.logoes-btn').on('click', function (e) {
    e.preventDefault();
    $('div.site').hide();
    $('div.poster').hide();
    $('div.app').show();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });
  $('.web-ap-bots-btn').on('click', function (e) {
    e.preventDefault();
    $('div.site').hide();
    $('div.app').hide();
    $('div.poster').show();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });
});

/* ====== PureCounter ====== */
new PureCounter({
  selector: ".purecounter",
  duration: 3,
  separator: true,

});

/* ====== Owl carousel ====== */

$('#owl-carousel-1').owlCarousel({
  rtl: true,
  loop:true,
  margin:10,
  merge:true,
  responsive: {
    0: {
      items: 2,
    },
    720: {
      items: 3,
        },

    940: {
      items: 4,
    },

    1320: {
      items: 5,
    },
  }
});


$('#owl-carousel-2').owlCarousel({
  rtl: true,
  loop:true,
  margin:10,
  merge:true,
  responsive: {
    0: {
      items: 2,
    },
    720: {
      items: 3,
        },

    940: {
      items: 4,
    },

    1320: {
      items: 5,
    },
  }
});

$('#owl-carousel-3').owlCarousel({
  rtl: true,
  loop:true,
  margin:10,
  merge:true,
  responsive: {
    0: {
      items: 1,
    },
    720: {
      items: 2,
        },

    940: {
      items: 3,
    },

    1320: {
      items: 4,
    },
  }
});



/* ====== iTyped ====== */ 
const titleElement = document.querySelector('#title')

ityped.init(titleElement, { strings: ['با سرور های هتزنر آلمان', 'پشتیبانی 24 ساعته', 'در هفت روز هفته','با ما کیفیت','امنیت','و سرعت را تجربه کنید'] });
 
