var charToType = "console.log( 'An<span class='emphasis'> engineer</span>, a<span class='emphasis'> designer</span>, a<span class='emphasis'> musician</span>, and a<span class='emphasis'> potatoe</span>' );";
var hint = "        return;";
var quit = false;
var isTag;
var characterIndex = 0;
var typedChar = "";

function typeChar() {
	typedChar = charToType.slice(0, ++characterIndex);
	$('#console').html(typedChar);
	var char = typedChar.slice(-1);
	if( char === '<' ) isTag = true;
	if( char === '>' ) isTag = false;
	if (isTag) return consoleType();
	setTimeout(consoleType, 50);
}

function consoleType() {
	if (typedChar === charToType) {
		if(quit) {
			return;
		}
		charToType = charToType + hint;
		quit = true;
		setTimeout(typeChar, 5000);
	} else {
		typeChar();
	}
}

$(function(){
	// Parallax scrolling, currently unused
	// $('.foreground-view').scroll(function(event){
	// 	var st = -$(this).scrollTop()*0.5;
	// 	$('.background-view').css({
	// 		"-webkit-transform": "translateY(" + st + "px)",
	// 		"-moz-transform": "translateY(" + st + "px)",
	// 		"-o-transform": "translateY(" + st + "px)",
	// 		"transform": "translateY(" + st + "px)"
	// 	});
	// });

    $(this).scrollTop(0);
	$('.fadeInUp-container').addClass('animated fadeInUp');
	$('.svg-container').addClass('show-svg');
	$('.background-view').addClass('background-show');
	$('.fadeInUp-container').show();
	setTimeout(consoleType, 500);
	new Vivus('welcome-svg', {
		type: 'delayed',
		duration: 120,
		animTimingFunction: Vivus.EASE
	});
});
