$( document ).ready(function() {
	$('.fadeInUp-container').addClass('animated fadeInUp');
	$('.greeting').addClass('animated fadeInUp');
	$('.IAmA').addClass('animated fadeInUp');
	$('#IAmA1').addClass('animated fadeInUp');
	$('#IAmA2').addClass('animated fadeInUp');
	$('#IAmA3').addClass('animated fadeInUp');
	$('.IAmP').addClass('animated fadeInUp');

	$('.greeting').hide();
	$('.IAmA').hide();
	$('#IAmA1').hide();
	$('#IAmA2').hide();
	$('#IAmA3').hide();
	$('.IAmP').hide();

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

			setTimeout(function(){ $('.IAmA').show(); }, 300);
			setTimeout(function(){ $('#IAmA1').show(); }, 600);
			setTimeout(function(){ $('#IAmA2').show(); }, 900);
			setTimeout(function(){ $('#IAmA3').show(); }, 1200);
			setTimeout(function(){ $('.IAmP').show(); }, 1500);
		}
	);

});