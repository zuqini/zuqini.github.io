String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

function loadPortrait() {
	$('.portrait').show();
	$('.portrait').addClass('animated fadeInLeft');
	$('.description').show();
	$('.description').addClass('animated fadeInRight');
}

$( document ).ready(function() {
	var code = "(function run() {" + '\n' + "        while (!(succeed = try());" + '\n' + "}());";
	var codeIndex = 0;
	var codeToType;
	var toggleCursor = true;
	var tryCounter = 1;
	var tryMessage = "";

	function typeCode() {
	    codeToType = code.slice(0, ++codeIndex);
	    if (codeToType === code) {
	    	$('#console-window').html(codeToType + '_');
	    	codeToType = codeToType + '\n' + '\n';
	    	setInterval(function() {
	    		toggleCursor = !toggleCursor;
	    		displayResult();
		    }, 500);

	    	setTimeout(function() {
	    		setInterval(function() {
	    			setTimeout(function() {
			    		updateTryMessage();
			    		displayResult();
			    	}, Math.random() * 800);
			    }, 	200);
	    	}, 500);
	    	return;
	    }
	    $('#console-window').html(codeToType + '_');
	    setTimeout(typeCode, 30);
	}

	function updateTryMessage() {
		if(tryCounter > 9007199254740992) {
			tryCounter = -9007199254740992;
		}
		tryMessage = "try #" + tryCounter++ + "...";
	}

	function displayResult() {
		if(!toggleCursor) {
			$('#console-window').html(codeToType + tryMessage + '\n' + " ");
		}
      	else {
      		$('#console-window').html(codeToType + tryMessage + '\n' + '_');
      	}
	}

	var description = ["<p>Hi there, thanks for visiting my site! :)<br><br>",
							"I am a Software Engineering student at University of Waterloo.<br><br>",
							"I am passionate about developing software applications for <span style='color:#ba7700; font-size:22px'>web</span> and <span style='color:#ba7700; font-size:22px'>mobile</span> platforms with <span style='color:#ba7700; font-size:22px'>elegant</span> design and <span style='color:#ba7700; font-size:22px'>scalable</span> code.<br><br>"];
	var isTag;
	var characterIndex = 0;
	var descriptionIndex = 0;
	var typedDescription;
	function typeDescription() {
		typedDescription = description[descriptionIndex].slice(0, ++characterIndex);
		if (typedDescription === description[descriptionIndex]) {
			if(++descriptionIndex == description.length) {
				return;
			} else {
				description[descriptionIndex] = description[descriptionIndex - 1] + description[descriptionIndex];
				isTag = false;
				setTimeout(typeDescription, 400);
			}
	    } else {
			document.getElementById('description').innerHTML = typedDescription + '_';
			var char = typedDescription.slice(-1);
			if( char === '<' ) isTag = true;
			if( char === '>' ) isTag = false;
			if (isTag) return typeDescription();
			setTimeout(typeDescription, 15);
	    }
	}

	new Vivus('welcome-svg', {
			file: 'resources/zuqi.svg',
			type: 'oneByOne'
		}, function(vivus) {
			$('.fadeInUp-container').show();
			$('.fadeInUp-container').addClass('animated fadeInUp');
			$('.trans-grow').addClass('grow');
			$('.background-view').addClass('background-show');
			$(window).scrollTop($(window).scrollTop());
			typeCode();
			typeDescription();
		}
	);

	//chrome
	$('.fadeInUp-container').show();
	$('.fadeInUp-container').addClass('animated fadeInUp');
	$('.trans-grow').addClass('grow');
	$('.background-view').addClass('background-show');
	$(window).scrollTop($(window).scrollTop());
	typeCode();
	typeDescription();
});