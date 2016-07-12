$(window).on('action:widgets.loaded',function(){
  $('.my-slider').unslider({
    autoplay: true,
    animation: 'fade',
    nav: false,
    arrows: {
    	//  Unslider default behaviour
    	prev: '<a class="unslider-arrow prev"><i class="fa fa-angle-left fa-3x" aria-hidden="true"></i></a>',
    	next: '<a class="unslider-arrow next"><i class="fa fa-angle-right fa-3x" aria-hidden="true"></i></a>',
    }
  });
})
