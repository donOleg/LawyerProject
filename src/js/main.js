$(document).ready(function() {

	// фиксация header
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 57) {
					$('.header').addClass('fix');
			} else {
					$('.header').removeClass('fix');
			}
		});
	});

	$('.menuTrigger').on('click', function () {
    if ($('body').hasClass('menu_open')) {
      $('body').removeClass('menu_open');
      $(this).removeClass('active_mod');
    } else {
      $('body').addClass('menu_open');
      $(this).addClass('active_mod');
    }
	});

	/* Якоря на ссылки */
	$("a.menu_list_link, a.main_btn").mPageScroll2id();

	/*** Стилизация checkbox, select ***/
	$('.styled').styler();
	/*** Стилизация checkbox, select  end ***/

	/*** Slide ***/
	$('.reviews_slide').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		speed: 1000,
		dots: false,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	/*** Slide end ***/

});


/* Preloader*/
document.body.onload = function () {

	setTimeout( function () {
		var preloader = document.getElementById('pagePreloader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 1000);

};