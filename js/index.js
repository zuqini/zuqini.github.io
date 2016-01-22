var charToType = "I am a<span class='emphasis'> developer</span>, a<span class='emphasis'> designer</span>, and a<span class='emphasis'> musician</span>";
var isTag;
var characterIndex = 0;
var typedChar = "";
function consoleType() {
	typedChar = charToType.slice(0, ++characterIndex);
	if (typedChar === charToType) {
		return;
	}
	$('#console').html(typedChar);
	var char = typedChar.slice(-1);
	if( char === '<' ) isTag = true;
	if( char === '>' ) isTag = false;
	if (isTag) return consoleType();
	setTimeout(consoleType, 50);
	}

$( document ).ready(function() {
	$('.fadeInUp-container').addClass('animated fadeInUp');
	new Vivus('welcome-svg', {
			type: 'oneByOne',
			duration: 80
		}, function(vivus) {
			$('.trans-grow').addClass('grow');
			$('.background-view').addClass('background-show');
			$('.fadeInUp-container').show();
			$(window).scrollTop($(window).scrollTop());
			setTimeout(consoleType, 500);
		}
	);
});