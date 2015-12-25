$( document ).ready(function() {
	$('.fadeInUp-container').addClass('animated fadeInUp');
	$('.greeting').addClass('animated fadeInUp');
	$('.IAmA').addClass('animated fadeInUp');
	$('#IAmA1').addClass('animated fadeInUp');
	$('#IAmA2').addClass('animated fadeInUp');
	$('#IAmA3').addClass('animated fadeInUp');
	$('.IAmP').addClass('animated fadeIn');

	new Vivus('welcome-svg', {
			file: 'resources/zuqi.svg',
			type: 'oneByOne',
			duration: 80
		}, function(vivus) {
			$('.trans-grow').addClass('grow');
			$('.background-view').addClass('background-show');
			$('.greeting').show();
			$('.fadeInUp-container').show();
			$(window).scrollTop($(window).scrollTop());

			setTimeout(function(){ $('.IAmA').css("display", "inline-block"); }, 500);
			setTimeout(function(){ $('#IAmA1').css("display", "inline-block"); }, 800);
			setTimeout(function(){ $('#IAmA2').css("display", "inline-block"); }, 1100);
			setTimeout(function(){ $('#IAmA3').css("display", "inline-block"); }, 1400);
			setTimeout(function(){ $('.IAmP').show(); }, 2000);
		}
	);

});