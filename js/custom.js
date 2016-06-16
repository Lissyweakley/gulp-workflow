
document.addEventListener('DOMContentLoaded', function(){

		(function(){

			var nav = document.querySelector('.nav-collapse'),
			navList = nav.firstElementChild,
			link = document.createElement('a');
					
			nav.appendChild(link);
			link.classList.add('hamburger');
			link.innerHTML = '<span>Menu</span>';
					
			var	hamburger = document.querySelector('.hamburger');

			navList.classList.add('accessibly-hidden');

			hamburger.addEventListener('click', function (e) {

			e.preventDefault();
			navList.classList.toggle('accessibly-hidden');

		});

	})();

});


	function timeOut(){ 
	  $("#guide").hide();
	   $("#guide").fadeIn(40000).delay(1000);
	}
	timeOut();

	var audio = new Audio('../audio/cry-baby.mp3');
	audio.play();

	document.getElementById('mute').addEventListener('click', function (e)
	{
	    e = e || window.event;
	    audio.muted = !audio.muted;
	    e.preventDefault();
	}, false);

	$('#mute').click(function(){
	    $(this).find('i').toggleClass('fa-volume-up fa-volume-off')
	});











