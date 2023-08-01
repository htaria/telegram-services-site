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

/* ====== iTyped ====== */
const titleElement = document.querySelector('#title')

ityped.init(titleElement, { strings: ['با سرور های هتزنر آلمان', 'پشتیبانی 24 ساعته', 'در هفت روز هفته','با ما کیفیت','امنیت','و سرعت را تجربه کنید'] });

