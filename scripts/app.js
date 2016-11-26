(function () {
	
    // aspectRatio

    var clientWidth = document.getElementById('clientWidth').clientWidth;
    var elements = document.getElementsByClassName('aspectRatio');
    for (var i = 0; i < elements.length; i++){
    	elements[i].style.height = clientWidth+"px";
    }
    
})();