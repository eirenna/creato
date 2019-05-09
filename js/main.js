;
(function () {
	"use strict";
	$(document).ready(function () {
		$('.ba-text-slider').slick({
			infinite: true,
			//autoplay: true,
			asNavFor: '.ba-img-slider',			
			appendArrows: $('.ba-slider-arrows'),
			prevArrow: '<button class="ba-btn"><svg class="icon icon-angle-left"><use xlink:href="#icon-angle-left"></use></svg></button>',
			nextArrow: '<button class="ba-btn"><svg class="icon icon-angle-right"><use xlink:href="#icon-angle-right"></use></svg></button>'
			
		});
		$('.ba-img-slider').slick({
			infinite: true,
			//autoplay: true,
			asNavFor: '.ba-text-slider',
			arrows: false			
		});
	});

	let btn = $('.ba-nav-btn');
	let menu = $('.ba-nav')

	btn.on('click', function(e) {
		e.preventDefault();
		menu.toggleClass('ba-open');
		
		//this.toggleClass('ba-open');
	})
})();