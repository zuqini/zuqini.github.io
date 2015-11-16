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

$( document ).ready(function() {
	//console-box variables
	var code = "(function run() {" + '\n' + "   while (!(succeed = try());" + '\n' + "}());";
	var codeIndex = 0;
	var isTag;
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

	new Vivus('welcome-svg', {
			file: 'resources/zuqi.svg',
			type: 'oneByOne'
		}, function(vivus) {
			$('#sub-title').show();
			$('#console-window').show();
			$('.image-links').show();
			$('#sub-title').addClass('animated fadeInUp');
			$('#console-window').addClass('animated fadeInUp');
			$('.image-links').addClass('animated fadeInUp');
			$('.trans-grow').addClass('grow');
			$('.background-view').addClass('background-show');
			$(window).scrollTop($(window).scrollTop());
			typeCode();
		}
	);
});