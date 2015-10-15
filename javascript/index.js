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
	new Vivus('welcome-svg', {
			file: 'resources/zuqi.svg',
			type: 'oneByOne'
		}, function(vivus) {
			$('#mini-title').show();
			$('#mini-title').addClass('animated fadeInUp');
			typeCode();
		}
	);

	//Type some code
	var code = "<p>(function run() {</p><p style='text-indent:50px;'>while (!message.equals(mystery)) {</p><p style='text-indent:100px;'>message.scramble();</p><p style='text-indent:100px;'>print(message);</p><p style='text-indent:50px;'>}</p><p>}());</p>";
    var i = 0;
    var isTag;
    var codeToType;

	function typeCode() {
	    codeToType = code.slice(0, ++i);
	    if (codeToType === code) {
	    	document.getElementById('type-code').innerHTML = codeToType + '_';
	    	setTimeout(handleCode, 500);
	    	return;
	    }
	    
	    document.getElementById('type-code').innerHTML = codeToType + '_';

	    var char = codeToType.slice(-1);
	    if( char === '<' ) isTag = true;
	    if( char === '>' ) isTag = false;

	    if (isTag) return typeCode();
	    setTimeout(typeCode, 40);
	}

	//shuffling
	var target = "Welcome to my website!";
	var str = target.shuffle();

	var count = 0;
	var maxCount = 200;

	function handleCode() {
		document.getElementById('type-code').innerHTML = codeToType;
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