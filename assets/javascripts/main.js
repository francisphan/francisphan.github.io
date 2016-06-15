function init(){
	window.addEventListener('scroll', function(e){
		if(window.pageYOffset > 156){
			$('.header_wrapper').addClass('shrink');
			$('.title').addClass('shrink');
		}
		else{
			if($('.header_wrapper').hasClass('shrink')){
				$('.header_wrapper').removeClass('shrink');
			}
			if($('.title').hasClass('shrink')){
				$('.title').removeClass('shrink');
			}

		}
	});
}
window.onload = init();