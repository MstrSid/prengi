document.addEventListener('DOMContentLoaded', () => {

	class HeaderItem {
		constructor(src, alt, title, text, contacts, parentSelector, ...classes) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.text = text;
			this.contacts = contacts;
			this.classes = classes;
			this.parent = document.querySelector(parentSelector);
		}

		render() {
			const element = document.createElement('div');
			if (this.classes.length == 0) {
				this.classes.push('header__item');
			}
			this.classes.forEach(className => element.classList.add(className));

			element.innerHTML = `
		<div class="header__flag">
						<img src="${this.src}" alt="${this.alt}" class="header__image">
					</div>
					<div class="header__descr">
						<div class="header__title">${this.title}</div>
						<div class="header__text">${this.text}</div>
						<div class="header__contacts">${this.contacts}</div>
					</div>
		`;

			this.parent.append(element);
		}


	}
	new HeaderItem(`icons/png/flags/ukr.png`,
		`ukraine flag`,
		`Ukraine`,
		`hi@vasolutions.com.ua`,
		`tel. +38(063) 930 07 002`,
		`.header .header__wrapper`,
		`header__item`).render();

	new HeaderItem(`icons/png/flags/ger.png`,
		`germany flag`,
		`Germany`,
		`Trierer Strabe 35, 54329 Konz`,
		`tel. +352 661 88 03 05`,
		`.header .header__wrapper`,
		`header__item`).render();

	new HeaderItem(`icons/png/flags/est.png`,
		`estonia flag`,
		`Estonia`,
		`K. Karbery 16/27, 13812 Tallinn`,
		`tel. +352 661 88 03 05`,
		`.header .header__wrapper`,
		`header__item`).render();

	new HeaderItem(`icons/png/flags/gbr.png`,
		`great britain flag`,
		`Great Britain`,
		`E20LP, Golden vc House, London`,
		`tel. +44 750 109 55 29`,
		`.header .header__wrapper`,
		`header__item`).render();

	new HeaderItem(`icons/png/flags/lux.png`,
		`luxembourg flag`,
		`Luxembourg`,
		'2,Rue d`Avalon, L-1159 Luxembourg',
		`tel. +352 661 88 03 05`,
		`.header .header__wrapper`,
		`header__item`).render();


});

$(document).ready(function () {
	/* owl start */
	$(".owl-carousel-one").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navSpeed: 800,
		dotsSpeed: 800,
		margin: 200,
		smartSpeed: 800,
		fluidSpeed: 800
	});

	function owl_two_init() {
		$(".owl-carousel-two").owlCarousel({
			items: 1,
			loop: true,
			dots: false,
			nav: true,
			navSpeed: 800,
			margin: 100,
			smartSpeed: 800,
			fluidSpeed: 800,
			navText: ["<img src='img/solutions/arrow-left.png'>", "<img src='img/solutions/arrow-right.png'>"],
		});
	}
	owl_two_init();

	/* owl end */

	$('.solutions__tabs').on('click', 'div:not(.solutions__tab_active)', function () {
		$('.owl-carousel-two').owlCarousel('destroy');
		$(this)
			.addClass('solutions__tab_active').siblings().removeClass('solutions__tab_active')
			.closest('div.container').find('div.solutions__tab-item').removeClass('solutions__tab-item_active').eq($(this).index()).addClass('solutions__tab-item_active');
		owl_two_init();
	});
});