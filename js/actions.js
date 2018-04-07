$(document).ready(function(){
	//Timeline Modal
	$("#coursework").click(function(){
		$('.ui.timeline.modal')
		.modal('show');
	});


	//Hides navbar when landing segment is visible -- Shows navbar when scroll past landing segment
	$('.ui.inverted.masthead.segment')
	.visibility({
		once: false,
		onBottomPassed: function() {
			$('.fixed.menu').transition('slide down');
		},
		onBottomPassedReverse: function() {
			$('.fixed.menu').transition('fade out');
		}

	});

	$('.tabular.menu .item').tab();
	
	$('.ui.javascrpt.card')
	.visibility({
		once: false,
		onBottomVisible: function() {
			$('.ui.javascrpt.card')
			.popup({
				popup : '.icons_popup',
				position : 'right center'
			})
			.popup('show');
			setTimeout(function(){ $('.icons_popup').transition('fade out'); }, 3000);
		}
	});

	
	// contact modal logic
	$('.contact.button').click(function(){
		$('form').form('clear');
		$('.contact.modal')
		.modal('show');
	});

	$('.ui.form')
	.form({
		fields: {
			email: {
				identifier: 'email',
				rules: [
				{
					type   : 'email',
					prompt : 'Please enter a valid email address'
				}
				]
			},
			subject: {
				identifier: 'subject',
				rules: [
				{
					type   : 'empty',
					prompt : 'Please enter a subject'
				}
				]
			},
			contents: {
				identifier: 'contents',
				rules: [
				{
					type   : 'empty',
					prompt : 'Please enter a message'
				}
				]
			}
		}});
	
	$('.submit.button').click(function(){
		if( $('.ui.form').form('is valid')) {
			$('.contact.modal').transition('bounce');
			$('.success.message').html("Successfully Sent. I will contact you as soon as possible.");
			setTimeout(function(){ 
				$('.contact.modal')
				.modal('hide');
				window.stop();
				$('.success.message').html("")}, 2500);
		}
	});
		

	$('.ui.blurring.dimmable.image').dimmer({
	  on: 'hover'
	});

	// Smooth Scroll Logic
	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	    	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	    	&& 
	    	location.hostname == this.hostname
	    	) {
	      // Figure out element to scroll to
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	        	scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	          	return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	        };
	    });
	    }
	}
	});

});
