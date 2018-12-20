$(function() {	
$(document).ready(function(){
	$(function() {

				Slider.init();
			
			});
	
	//SCROLL TO TOP ON PAGE RELOAD//
	$('html').animate({scrollTop:0}, 1);
    $('body').animate({scrollTop:0}, 1);
	
	//$('.under_pic').hide();
	//INTRO PAGE//
	
	$(".rainbow-button").click(function(){
						 
			setTimeout(function() {
			$(window).scrollTo('.page_1', 1000);
		}, 500)
    });

	//FIRST PAGE: rb1=right side rb2=left side 
	
    $(".rb1").click(function(){
		 $('.palz').fadeOut(1000);
		//Animates the button 'left' when clicked
		$(this).fadeOut(1000);  
		$(".rb2").fadeOut(1000);  
       $(".box_1").animate({left: '32.5%', top: '150%'}, 1500, function() {
		  $(this).fadeOut('slow');
	  	});
      $(".box_2").animate({right: '32.5%', bottom: '150%'}, 1500, function() {
		$(this).fadeOut('slow');  
	  	});
		
		
		//Scrolls to next page after a pause
		setTimeout(function() {
			$(window).scrollTo('.page_2', 1000);
		}, 2500)
    });

	
	  $(".rb2").click(function(){
		   $('.palz').fadeOut(1000);
		//Animates the button 'right' when clicked
		$(this).fadeOut(1000);  
		$(".rb1").fadeOut(1000); 
      
		 $(".box_1").animate({left: '32.5%', top: '150%'}, 1500, function() {
		  $(this).fadeOut('Slow');
	  	});
      $(".box_2").animate({right: '32.5%', bottom: '150%'}, 1500, function() {
		$(this).fadeOut('slow');  
	  	});
		  //Scrolls to next page after a pause
	  setTimeout(function() {
			$(window).scrollTo('.page_2', 1000);
		}, 2500)
	  });
	
	
	//SECOND PAGE  rb3=top//
	
	
	   $(".rb3").click(function(){
      $(this).fadeOut(1000);  
		$(".rb4").fadeOut(1000);
		   $('.snug_chug').fadeOut(1000);
		   
       $(".box_1_2").animate({top: '-100%'}, 1500, function() {
		  $(this).fadeOut('slow');
	  	});
      $(".box_2_2").animate({top: '100%'}, 1500, function() {
		$(this).fadeOut('slow');  
	  	});
		//Scrolls to next page after a pause
		setTimeout(function() {
			$(window).scrollTo('.page_3', 1000);
		}, 2500)
    });
	
	
	  $(".rb4").click(function(){
      $(this).fadeOut(1000);
		   $('.snug_chug').fadeOut(1000);
		
		  $(".rb3").fadeOut(1000);
       $(".box_1_2").animate({top: '-100%'}, 1500, function() {
		  $(this).fadeOut('slow');
	  	});
      $(".box_2_2").animate({top: '100%'}, 1500, function() {
		$(this).fadeOut('slow');  
	  	});
		
		//Scrolls to next page after a pause
		setTimeout(function() {
			$(window).scrollTo('.page_3', 1000);
		}, 2500)
    });
	
	//PAGE THREE//
	
	  $(".rb6").click(function(){
      $(this).fadeOut(1000);  
		$(".rb5").fadeOut(1000);
		  $('.road_trip').fadeOut(1000);
		$(".box_1_3").animateRotate(-90);
		  
		  
		   $(".box_1_3").animateRotate(90, {
			duration: 1333,
			easing: 'linear',
			complete: function () {},
			step: function () {}
			});
		  
		   $(".box_2_3").animateRotate(-90, {
			duration: 1333,
			easing: 'linear',
			complete: function () {},
			step: function () {}
			});
		  
		  $(".box_3_3").animateRotate(90, {
			duration: 1333,
			easing: 'linear',
			complete: function () {},
			step: function () {}
			});
		  
		   $(".box_4_3").animateRotate(-90, {
			duration: 1333,
			easing: 'linear',
			complete: function () {},
			step: function () {}
			});
		  
		  
       $(".box_1_3").animate({top: '-100%'}, 1500, function() {
		  $(this).fadeOut('slow');
	  	});
      $(".box_2_3").animate({top: '100%'}, 1500, function() {
		$(this).fadeOut('slow');  
	  	});
		    $(".box_3_3").animate({top: '-100%'}, 1500, function() {
		  $(this).fadeOut('slow');
	  	});
      $(".box_4_3").animate({top: '150%'}, 1500, function() {
		$(this).fadeOut('slow');  
	  	});
		//Scrolls to next page after a pause
		setTimeout(function() {
			$(window).scrollTo('.page_4', 1000);
		}, 2500)
    });
	
	 $(".rb5").click(function(){
      $(this).fadeOut(1333);  
		$(".rb6").fadeOut(1000);
		 $('.road_trip').fadeOut(1000);
		   
		 $(".box_1_3").animateRotate(-90, {
			duration: 1333,
			easing: 'linear',
			complete: function () {},
			step: function () {}
			});
		 
		   $(".box_2_3").animateRotate(90, {
			duration: 1333,
			easing: 'linear',
			complete: function () {},
			step: function () {}
			});
		  
		  $(".box_3_3").animateRotate(-90, {
			duration: 1333,
			easing: 'linear',
			complete: function () {},
			step: function () {}
			});
		  
		   $(".box_4_3").animateRotate(90, {
			duration: 1333,
			easing: 'linear',
			complete: function () {},
			step: function () {}
			});
		 
		 
       $(".box_3_3").animate({top: '-150%'}, 3000, function() {
		  $(this).fadeOut('slow');
	  	});
      $(".box_4_3").animate({top: '150%'}, 1500, function() {
		$(this).fadeOut('slow');  
	  	});
		   $(".box_1_3").animate({top: '-150%'}, 1500, function() {
		  $(this).fadeOut('slow');
	  	});
      $(".box_2_3").animate({top: '150%'}, 1500, function() {
		$(this).fadeOut('slow');  
	  	});
		//Scrolls to next page after a pause
		setTimeout(function() {
			$(window).scrollTo('.page_4', 1000);
		}, 2500)
    });
		 
	
//	LAST PAGES
	
	$.fn.animateRotate = function(angle, duration, easing, complete) {
      var args = $.speed(duration, easing, complete);
      var step = args.step;
      return this.each(function(i, e) {
        args.complete = $.proxy(args.complete, e);
        args.step = function(now) {
          $.style(e, 'transform', 'rotate(' + now + 'deg)');
          if (step) return step.apply(e, arguments);
        };
 
        $({deg: 0}).animate({deg: angle}, args);
      });
    };
  
$("#page_4").css("background-color", "#5c24e7");
$("#page_4").css("height", "100vh");
$("#page_4").css("width", "100%");
$("#page_4").fadeIn();
$(".maincontent").fadeIn();
 
$(".mainlink").on("click", function() {
    $(".maincontent").fadeOut();
    $("#page_4").animate({
        width: "25px",
        height: "375px"
    }, function() {
        $(this).animateRotate(90);
    });
     
    setTimeout(function() {
        $("#page_4").fadeOut();       
    }, 1500);
     
    setTimeout(function() {
        $("#next-page").animateRotate(0, 0);
        $("#next-page").css("height", "25px");
        $("#next-page").css("width", "375px");
        $("#next-page").fadeIn();
        $("#next-page").animate({
            backgroundColor: "#FF30B4"
        }, function() {
            $(this).animate({
                height: "100vh"
            }, function() {
                $(this).animate({
                    width: "100%"
                }, function() {
                    $(".nextcontent1").fadeIn(300);
                });
            });
        });
    }, 800);
});
  
  $(".nextlink").on("click", function() {
        $(".nextcontent1").fadeOut();
        $("#next-page").animate({
            width: "25px",
            height: "375px"
        }, function() {
            $(this).animateRotate(-90);
        });
         
        setTimeout(function() {
            $("#next-page").fadeOut();          
        }, 1500);
         
        setTimeout(function() {
        $("#last-page").animateRotate(0, 0);
        $("#last-page").css("height", "25px");
        $("#last-page").css("width", "375px");
            $("#last-page").fadeIn();
            $("#last-page").animate({
                height: "100vh"
            }, function() {
                $(this).animate({
                    width: "100%"
                }, function() {
                    $(".nextcontent3").fadeIn(300);
                });
            });
        }, 1400);
	  
	 	$(".nextlink").click(function(){
						 
			setTimeout(function() {
			$(window).scrollTo('.page_5', 1000);
		}, 500);
    });
	 });
	
    });
	
});

var $container = $( '#ps-container' ),
	$contentwrapper = $container.children( 'div.ps-contentwrapper' ),
	// the items (description elements for the slides/products)
	$items = $contentwrapper.children( 'div.ps-content' ),
	itemsCount = $items.length,
	$slidewrapper = $container.children( 'div.ps-slidewrapper' ),
	// the slides (product images)
	$slidescontainer = $slidewrapper.find( 'div.ps-slides' ),
	$slides = $slidescontainer.children( 'div' ),
	// navigation arrows
	$navprev = $slidewrapper.find( 'nav > a.ps-prev' ),
	$navnext = $slidewrapper.find( 'nav > a.ps-next' ),
	// current index for items and slides
	current = 0,
	// checks if the transition is in progress
	isAnimating = false,
	// support for CSS transitions
	support = Modernizr.csstransitions// transition end event
	// transition end event
	// https://github.com/twitter/bootstrap/issues/2870
	transEndEventNames = {
		'WebkitTransition' : 'webkitTransitionEnd',
		'MozTransition' : 'transitionend',
		'OTransition' : 'oTransitionEnd',
		'msTransition' : 'MSTransitionEnd',
		'transition' : 'transitionend'
	};

init = function() {

	// show first item
	var $currentItem = $items.eq( current ),
		$currentSlide = $slides.eq( current ),
		initCSS = {
			top : 0,
			zIndex : 999
		};

	$currentItem.css( initCSS );
	$currentSlide.css( initCSS );
	
	// update nav images
	updateNavImages();

	// initialize some events
	initEvents();

},
updateNavImages = function() {

	// updates the background image for the navigation arrows
	var configPrev = ( current > 0 ) ? $slides.eq( current - 1 ).css( 'background-image' ) : $slides.eq( itemsCount - 1 ).css( 'background-image' ),
		configNext = ( current < itemsCount - 1 ) ? $slides.eq( current + 1 ).css( 'background-image' ) : $slides.eq( 0 ).css( 'background-image' );

	$navprev.css( 'background-image', configPrev );
	$navnext.css( 'background-image', configNext );

},
adjustLayout = function() {

	$container.css( 'height', $window.height() );

},
 
  initEvents = function() {

	$navprev.on( 'click', function( event ) {

		if( !isAnimating ) {
			
			slide( 'prev' );
		
		}
		return false;

	} );

	$navnext.on( 'click', function( event ) {

		if( !isAnimating ) {
			
			slide( 'next' );
		
		}
		return false;

	} );

	// transition end event
	$items.on( transEndEventName, removeTransition );
	$slides.on( transEndEventName, removeTransition );
	
},
  
  slide = function( dir ) {

	isAnimating = true;

	var $currentItem = $items.eq( current ),
		$currentSlide = $slides.eq( current );

	// update current value
	if( dir === 'next' ) {

		( current < itemsCount - 1 ) ? ++current : current = 0;

	}
	else if( dir === 'prev' ) {

		( current > 0 ) ? --current : current = itemsCount - 1;

	}
		// new item that will be shown
	var $newItem = $items.eq( current ),
		// new slide that will be shown
		$newSlide = $slides.eq( current );

	// position the new item up or down the viewport depending on the direction
	$newItem.css( {
		top : ( dir === 'next' ) ? '-100%' : '100%',
		zIndex : 999
	} );
	
	$newSlide.css( {
		top : ( dir === 'next' ) ? '100%' : '-100%',
		zIndex : 999
	} );

	setTimeout( function() {

		// move the current item and slide to the top or bottom depending on the direction 
		$currentItem.addClass( 'ps-move' ).css( {
			top : ( dir === 'next' ) ? '100%' : '-100%',
			zIndex : 1
		} );

		$currentSlide.addClass( 'ps-move' ).css( {
			top : ( dir === 'next' ) ? '-100%' : '100%',
			zIndex : 1
		} );

		// move the new ones to the main viewport
		$newItem.addClass( 'ps-move' ).css( 'top', 0 );
		$newSlide.addClass( 'ps-move' ).css( 'top', 0 );

		// if no CSS transitions set the isAnimating flag to false
		if( !support ) {

			isAnimating = false;

		}

	}, 0 );

	// update nav images
	updateNavImages();
};

$(document).ready(function() {
 
  $('.method').on('click', function() {
    $('.method').removeClass('blue-border');
    $(this).addClass('blue-border');
  });
 
});

var $cardInput = $('.input-fields input');
 
$('.next-btn').on('click', function(e) {
 
  $cardInput.removeClass('warning');
 
  $cardInput.each(function() {    
     var $this = $(this);
     if (!$this.val()) {
       $this.addClass('warning');
     }
  });


});


$(document).ready(function() {
	$(".buybuy").click(function(){			 
			setTimeout(function() {
			$(window).scrollTo('.check_out', 1000);
		}, 500);
    });
});
	

  
	