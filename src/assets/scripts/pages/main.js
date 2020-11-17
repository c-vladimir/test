import $ from 'jquery'

$(document).ready(() => {


/*
	|--------------------------------------------------------------------------
	| мобильное меню
	|--------------------------------------------------------------------------
	*/

	$(document).on('click', '.icon-menu-mobile', function(e) {
		e.preventDefault();

		var $opener = $(e.currentTarget)
		if ($('body').hasClass('overflow')) {
			$('body').removeClass('overflow');
		}

		if ($opener.hasClass('open')) {
			//$('.menu').removeClass('show');
			$('body').removeClass('overflow');
			$('.header__menu-mobile').removeClass('-active')
			$opener.removeClass('open');

			return false;
		}

		//$('.menu').addClass('show');
		$('body').addClass('overflow');
		$opener.addClass('open');
		$('.header__menu-mobile').addClass('-active')

	});

	
	// $(document).on('click', '.menu__item a', function(e) {
	// 	e.preventDefault();
	// 	$('.icon-menu-mobile').removeClass('open')
	// 	$('.header__menu-mobile').removeClass('-active')
	// })


})


