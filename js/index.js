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
	//console-box variables
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

	var description = "<p>Hi there, thanks for visiting my site! :)" +
							"<br><br>I am passionate about developing software applications for <span style='color:yellow;'>web</span> and <span style='color:yellow;'>mobile</span> platforms with" +
							" <span style='color:red; font-size:20px'>elegant</span> design and <span style='color:red; font-size:20px'>scalable</span> code." +
							"<br><br>Want to get to know me better? Check out my <a href='/portfolio'><span style='text-decoration: underline; font-size:18px;'>portfolio</span></a>" +
							" or take a look at my <a target='_blank' href='/resources/ZuqiLi_Resume.pdf'><span style='text-decoration: underline; font-size:18px;'>résumé</span></a>.<p>";
	var isTag;
	var descriptionIndex = 0;
	var typedDescription;
	function typeDescription() {
	    typedDescription = description.slice(0, ++descriptionIndex);
	    if (typedDescription === description) return;

	    document.getElementById('description').innerHTML = typedDescription + '_';
	    var char = typedDescription.slice(-1);
	    if( char === '<' ) isTag = true;
	    if( char === '>' ) isTag = false;
	    if (isTag) return typeDescription();
	    setTimeout(typeDescription, 30);
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
});