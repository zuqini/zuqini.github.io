$( document ).ready(function() {
	new Vivus('welcome-svg', {
			file: 'resources/zuqi.svg',
			type: 'oneByOne'
		}, function(vivus) {
			typeCode();
		}
	);

	//Type some code
	var code = "<p>(welcome() {</p><p style='text-indent:50px;'>for (int i = 5; i > 0; i--) {</p><p style='text-indent:100px;'>print(\"Welcome!  \");</p><p style='text-indent:50px;'>}</p><p>}());</p>";
    var i = 0;
    var j = 0;
    var isTag;
    var codeToType;
    var codeResult = "";

	function typeCode() {
	    codeToType = code.slice(0, ++i);
	    if (codeToType === code) {
	    	typeResult();
	    	return;
	    }
	    
	    document.getElementById('type-code').innerHTML = codeToType;

	    var char = codeToType.slice(-1);
	    if( char === '<' ) isTag = true;
	    if( char === '>' ) isTag = false;

	    if (isTag) return typeCode();
	    setTimeout(typeCode, 20);
	}

	function typeResult() {
		if(j++ == 5) {
			return;
		}
		codeResult += "Welcome! ";
		document.getElementById('type-result').innerHTML = codeResult;
		setTimeout(typeResult, 60);
	}
});