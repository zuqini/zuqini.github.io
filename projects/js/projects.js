$( document ).ready(function() {
	$('.trans-grow').addClass('grow');
	$('.title').addClass('animated fadeInDown');
	$('#project1').addClass('animated fadeInLeft');
	$('#project2').addClass('animated fadeInRight');
	$('#project3').addClass('animated fadeInLeft');
	$('#project4').addClass('animated fadeInRight');
	$('#project5').addClass('animated fadeInLeft');
	$('#project6').addClass('animated fadeInRight');

	setTimeout(function(){ $('#project1').show(); }, 200);
	setTimeout(function(){ $('#project2').show(); }, 500);
	setTimeout(function(){ $('#project3').show(); }, 800);
	setTimeout(function(){ $('#project4').show(); }, 1100);
	setTimeout(function(){ $('#project5').show(); }, 1400);
	setTimeout(function(){ $('#project6').show(); }, 1700);
});