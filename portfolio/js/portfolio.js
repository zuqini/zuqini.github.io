$( document ).ready(function() {
	$('.trans-grow').addClass('grow');
	$('.title').addClass('animated fadeInDown');
	$('#project1').addClass('animated fadeInLeft');
	$('#project2').addClass('animated fadeInRight');
	$('#project3').addClass('animated fadeInLeft');

	setTimeout(function(){ $('#project1').show(); }, 200);
	setTimeout(function(){ $('#project2').show(); }, 500);
	setTimeout(function(){ $('#project3').show(); }, 800);
});