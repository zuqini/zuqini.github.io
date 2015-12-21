$( document ).ready(function() {
	new Vivus('welcome-svg', {
			file: 'resources/zuqi.svg',
			type: 'oneByOne'
		}, function(vivus) {
			$('.intro').show();
			$('.fadeInUp-container').show();
			$('.fadeInUp-container').addClass('animated fadeInUp');
			$('.trans-grow').addClass('grow');
			$('.background-view').addClass('background-show');
			$('.intro').addClass('animated fadeIn');
			$(window).scrollTop($(window).scrollTop());
		}
	);
});