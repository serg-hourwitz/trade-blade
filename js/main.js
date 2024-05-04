$(window).on('load', function () {
  // AOS init
  AOS.init({
    duration: 800,
    once: true,
  });
  // ----------
});

// Hamburger menu
if ($(window).width() <= 992) {
  $('.toggleMenu, .trigger-move').on('click', function () {
    $('.header__container').toggleClass('visible');
    $('body').toggleClass('scroll_disabled');
  });
}
// ----------

// Swiper
const dealsSlider = new Swiper('.deals__slider', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
});
// ----------

// Tariffs tabs
$('.tariffs__tabs-choose').on('click', 'button:not(.active)', function () {
  $(this)
    .addClass('active')
    .siblings()
    .removeClass('active')
    .closest('.tariffs__tabs')
    .find('.tariffs__tabs-content')
    .removeClass('active')
    .eq($(this).index())
    .addClass('active');
});
// ----------

// Dropdown
$('.dropdown-toggle').on('click', function () {
  $(this)
    .parent()
    .toggleClass('active')
    .find('.faq__item-dropdown')
    .slideToggle();

  $('.dropdown-toggle')
    .not(this)
    .parent()
    .removeClass('active')
    .find('.faq__item-dropdown')
    .slideUp();
});
// ----------

// Show all reviews
$('.reviews__btn').on('click', function () {
  $(this).hide();
  $('.review._hidden').removeClass('_hidden');
});
// ----------

// Menu move links
$('body').on('click', '.trigger-move', function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({ scrollTop: top }, 1500);
});
// ----------

// Tariffs terms
$('.tariffs__item-terms-heading').on('click', function () {
  $(this).toggleClass('active').next().slideToggle();

  $('.tariffs__item-terms-heading')
    .not(this)
    .removeClass('active')
    .next()
    .slideUp();
});

$('.tariffs__item-terms-item').on('click', function () {
  const discount = $(this).data('discount');

  $(this)
    .closest('.tariffs__item-terms-dropdown')
    .slideUp()
    .prev()
    .removeClass('active');

  $(this).parent().prev().html($(this).html());

  if (discount < 0) {
    $(this)
      .closest('.tariffs__item')
      .find('.tariffs__item-price')
      .html(
        `${$(this).data('value')} <sup class="tariffs__item-discount">
			${$(this).data('discount')}%</sup>`
      );
  } else {
    $(this)
      .closest('.tariffs__item')
      .find('.tariffs__item-price')
      .html($(this).data('value'));
  }
});

$('.submit-form').on('submit', function (e) {
  e.preventDefault();

  const modal = document.getElementById('myModal');

  const telegram = $(this).find('input[name=telegram]').val();
  const query_string = $(this).find('input[name=query-string]').val();

  $.ajax({
    url: 'success.php',
    data: {
      telegram,
      query_string,
    },
    type: 'POST',
    success: function (data) {
      modal.style.display = 'block';

      window._fbq.push('track', 'Lead');
      // var result = $('<div />').append(data).find('#showresults').html();
      // $('#showresults').html(result);
    },
    error: function (xhr, status) {
      alert('Sorry, there was a problem!');
    },
    complete: function (xhr, status) {
      //$('#showresults').slideDown('slow')
    },
  });
});

// Get the button that opens the modal
// const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const modal = document.getElementById('myModal');

const span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
// btn.onclick = function() {
// 	modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
// ----------
