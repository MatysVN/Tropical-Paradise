$(document).ready(function () {
	$(".reviews__boxes").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
        // Img change speed
		autoplaySpeed: 2500,
		arrows: false,
		mobileFirst: true,
        // Media queries
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	});
});