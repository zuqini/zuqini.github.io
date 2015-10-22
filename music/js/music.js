$( document ).ready(function() {
	$('.trans-grow').addClass('grow');
	$('.title').addClass('animated fadeInDown');
	$('button').addClass('animated fadeInUp');

	var toggleIcon = function (icon) {
		$(icon).toggleClass('glyphicon-play');
		$(icon).toggleClass('glyphicon-pause');
		$('#bg1').toggleClass('show-bg');
	}

	var audioReady = function () {
		this.load('resources/LegendOfAshitaka.wav');
		this.on('ended', function () { toggleIcon('#icon1'); }, this);
		var play_pause = document.getElementById('player1');
		play_pause.addEventListener('click', playPause.bind(this));
	}

	var playPause = function () {
		toggleIcon('#icon1');
		if (this.playing) {
			this.pause();
			this.volume(0);
			console.log(this.position, this.duration, this.load_percent, this.volume());
		} else {
			this.play();
			this.volume(0.5);
		}
		// or simply call this.playPause();
	}

	var initAudio = function () {
		var audio5js = new Audio5js({
			swf_path: '/statics/swf/audio5js.swf',
			throw_errors: true,
			format_time: true,
			ready: audioReady
		});
	}
	initAudio();
});