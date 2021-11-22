$(document).ready(function () {
	/* owl start */
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navSpeed: 800,
		dotsSpeed: 800,
		margin: 200,
		smartSpeed: 800,
		fluidSpeed: 800
		/*responsive: {
			300: {
				items: 1,
				nav: false,
				margin: 50
			},
			550: {
				items: 1,
				margin: 50
			},
			600: {
				items: 1,
				margin: 50
			},
			700: {
				items: 1,
				margin: 100
			},
			800: {
				items: 3,
				margin: -50
			}	,
			900: {
				items: 3,
				margin: -50
			}						
		}*/
	});
	/* owl end */

	// 	/* validation form start */
	// 	function validateForm(form) {
	// 		$(form).validate({
	// 			rules: {
	// 				name: {
	// 					required: true,
	// 					minlength: 2,
	// 					lettersonly: true
	// 				},
	// 				phone: "required",
	// 				email: {
	// 					required: true,
	// 					email: true
	// 				},
	// 				message: {
	// 					required: true
	// 				}
	// 			},

	// 			messages: {
	// 				name: {
	// 					required: "Введите имя",
	// 					lettersonly: "Только буквы",
	// 					minlength: jQuery.validator.format("Не менее {0} символов"),
	// 				},
	// 				phone: "Введите свой номер телефона",
	// 				email: {
	// 					required: "Введите свой email",
	// 					email: "Неверный формат"
	// 				},

	// 				message: {
	// 					required: "Введите текст сообщения",
	// 					minlength: jQuery.validator.format("Не менее {0} символов"),
	// 				}
	// 			},
	// 		});
	// 	}

	// 	function resetInput(form) {
	// 		$('.modal__close').on('click', function () {
	// 			var f = $(form);
	// 			f.validate().resetForm(); // clear out the validation errors
	// 			f[0].reset(); // clear out the form data
	// 		});
	// 	}

	// 	validateForm('#prices__form');
	// 	validateForm('#questions__form');

	// 	resetInput('#prices__form');
	// 	resetInput('#questions__form');

	// 	$('input[name=phone]').mask("+375(99)999-99-99");
	// 	/* validation form end */

	// 	/* smooth scroll start*/
	// 	$('a').on('click', function (e) {
	// 		if (this.hash !== '') {
	// 			e.preventDefault();
	// 			const hash = this.hash;
	// 			$('html, body').animate({
	// 				scrollTop: $(hash).offset().top
	// 			}, 800);
	// 		}
	// 	});
	// 	/* smooth scroll end*/

	// 	/* mailer start*/
	// 	$('.modal__close').on('click', function () {
	// 		$('.overlay, #thankyou').fadeOut();
	// 	});

	// 	$('form').submit(function (e) {
	// 		e.preventDefault();
	// 		if (!$(this).valid()) {
	// 			return;
	// 		}
	// 		$.ajax({
	// 			type: "POST",
	// 			url: "mailer/smart.php",
	// 			data: $(this).serialize()
	// 		}).done(function () {
	// 			$(this).find('input').val('');
	// 			$(this).find('textarea').val('');
	// 			$('.overlay, #thankyou').fadeIn();
	// 			$('form').trigger('reset');
	// 		});
	// 		return false;
	// 	});
	// 	/* mailer end */
});

// jQuery.validator.addMethod("lettersonly", function (value, element) {
// 	return this.optional(element) || /^[a-zа-я\s]+$/i.test(value);
// }, "Only alphabetical characters");

// /* hamburger event start*/
// window.addEventListener('DOMContentLoaded', () => {
// 	const menu = document.querySelector('.header__menu'),
// 		menuItem = document.querySelectorAll('.header__menu-item'),
// 		hamburger = document.querySelector('.hamburger');

// 	hamburger.addEventListener('click', () => {
// 		hamburger.classList.toggle('hamburger_active');
// 		menu.classList.toggle('header__menu_active');
// 	});

// 	menuItem.forEach(item => {
// 		item.addEventListener('click', () => {
// 			hamburger.classList.toggle('hamburger_active');
// 			menu.classList.toggle('header__menu_active');
// 		});
// 	});
// });
// /* hamburger event end*/