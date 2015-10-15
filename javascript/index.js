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
	$('#mini-title').hide();
	$('#console-window').hide();
	$('.image-links').hide();
	new Vivus('welcome-svg', {
			file: 'resources/zuqi.svg',
			type: 'oneByOne'
		}, function(vivus) {
			$('#mini-title').show();
			$('#console-window').show();
			$('.image-links').show();
			$('#mini-title').addClass('animated fadeInUp');
			$('#console-window').addClass('animated fadeInUp');
			$('.image-links').addClass('animated fadeInUp');
			typeCode();
		}
	);

	//Type some code
	var code = "function run() {" + '\n' + "   while (!message.equals(mystery)) {" + '\n' + "      message.scramble();" + '\n' + "      print(message);" + '\n' + "   }" + '\n' + "}" + '\n' + '\n' + "run();";
    var i = 0;
    var isTag;
    var codeToType;

	function typeCode() {
	    codeToType = code.slice(0, ++i);
	    if (codeToType === code) {
	    	$('#console-window').html(codeToType + '_');
	    	setTimeout(handleCode, 500);
	    	return;
	    }
	    
	    $('#console-window').html(codeToType + '_');

	    var char = codeToType.slice(-1);
	    if( char === '<' ) isTag = true;
	    if( char === '>' ) isTag = false;

	    if (isTag) return typeCode();
	    setTimeout(typeCode, 30);
	}

	//shuffling
	var target = "Welcome to my website!";
	var str = target.shuffle();

	var count = 0;
	var maxCount = 150;

	function handleCode() {
		$('#console-window').html(codeToType);
		scrambleWord();
	}

	function scrambleWord() {
	 	str = str.shuffle();
		document.getElementById('code-result').innerHTML = str;
		if(str == target || count++ === maxCount) {
	        document.getElementById('code-result').innerHTML = target;
	        return;
	    }
		setTimeout(scrambleWord, 20);
	};
});