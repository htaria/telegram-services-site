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
/* ====== PureCounter ====== */
new PureCounter({
  selector: ".purecounter",
  duration: 3,
  separator: true,

});

/* ====== Owl carousel ====== */

$('#owl-carousel-1').owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  merge: true,
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
  loop: true,
  margin: 10,
  merge: true,
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
  loop: true,
  margin: 10,
  merge: true,
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

/* ====== call box ====== */
$('.commenting').on('click', function (e) {
  e.preventDefault();
  var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
  $(this).addClass('call-icon-animation');
  $(this).one(animationEvent, function (e) {
    $(this).removeClass('call-icon-animation')
  });
  $('.call-box').find('div').toggleClass('call-icons-show');
  $(this).find('i').toggleClass('fa-commenting');
  $(this).find('i').toggleClass('fa-xmark');
});

/* ====== Bootstrap popover ====== */
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
const popover = new bootstrap.Popover('.popover-dismiss', {
  trigger: 'focus'
});
