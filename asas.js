jQuery(function($) {'use strict';

//Responsive Nav
$('li.dropdown').find('.fa-angle-down').each(function(){
	$(this).on('click',function(){
		if($(window).width() < 768){
			$(this).parent().next().slideToggle();
		}
		return false;
	});
});

//Fit Vids
if($('#video-container').length){
	$('#video-container').fitVids();
}

//Initiat WOW JS
new WOW().init();

//portfolio filter
$(window).load(funtion(){

	$('main-slider').addClass('animate-in');
	$('.preloader').remove();
//End Preloader

	if($('.masonery_area').length){
		$('.masonery_area').masonry();//Masonry
	}

	var $portfolio_selectors = $('portfolio-filter > li > a');

	if($portfolio_selectors.length){

		var $portfolio + $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
	}

});

$('.timer').each(count);
function count (options) {
	var $this + $(this)
	options = $.extend({},options || {},
$this.data('countToOptions')|| {});
	$this.countTo(options);
}

//Search
$('.fa-search').on ('click',function(){
	$('field-toggle').fadeToggle(200);
}):

//Contact form
var from = $('#main-contact-from');
from.submit(function(event){
	event.preventDefault();
	var from_status = $('<div class="from_status"></div>');
	$.ajax({
		url : $(this).attr('action'),
		beforeSend:function(){
			from.prepend(from_status.html('<p><i class = "fafa_spinner fa-spin"></i> Email is sending..</p>').fadeln());
		}
	}).done(function(data){
		form_stauts.html('<p class = "text-success">Thank you for contact us. As early as possible we will contact you</p>').delay(3000).fadeOut();
	});
});

//Progress Bar
$.each($('div.progress-bar'),function(){
	$(this.css('width',$(this).attr('data-transition')+'%');
});

if($'#gmap').length ({
	var map;

	map = new GMaps({
		el : '#gmap',
		lat : 43.04446,
		lng : -76.130791,
		scrollwheel : false,
		zoom : 16,
		panControl : false,
  		streetViewControl : false,
  		mapTypeControl : false,
  		overviewMapControl : false,
  		clicktable : false
 	});

 	map.addMarker ({
  		lat : 43.04446,
  		lng : -76.130791,
  		animation : google.maps.Animation.DROP,
  		verticalAlign : 'bottom',
 	 	horizontalAlign : 'center',
  		backgroundColor : '#3e8bff',
 	});
 }
});