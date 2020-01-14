var items = document.getElementsByClassName("title");
document.addEventListener('mousemove', function (evt){
	var x = evt.clientX;
	var y = evt.clientY;
	//console.log(x);
	var winWidth = window.innerWidth;
	var winHeight = window.innerHeight;
	var halfWidth = winWidth / 2;
	var halfHeight = winHeight / 2;

	var rx = x - halfWidth;
	var ry = halfHeight - y;
	var length = items.length;
	var max = 50;
	for (var i = 0 ; i < length ; i++) {
		 var dx = (items[i].getBoundingClientRect().width/max)*(rx / -halfWidth);
		var dy = (items[i].getBoundingClientRect().height/max)*(ry / halfHeight);
		items[i].style['transform'] = items[i].style['-webkit-transform'] = 'translate('+dx+'px,'+dy+'px)';
	}
}, false);

function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("section1").style.marginLeft = "200px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("section1").style.marginLeft= "0";
}



$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
