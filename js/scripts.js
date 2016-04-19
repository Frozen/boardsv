$(document).ready(function(){


	//phone
	$(".fast-order-block input").mask("+9 (999) 999-99-99",{placeholder:"+7 (123) 456-78-90"});
	


	//popup block
	$('.popup-wrap .btn-toggle').on('click touchstart', function() {
		$(this).toggleClass('active');
		$(this).parent('.header .contacts-block').toggleClass('active');
		return false;
	})
	$(document).click(function(event) {
	    if ($(event.target).closest(".popup-block").length) return;
	    $('.popup-wrap .btn-toggle').removeClass('active');
	    $('.header .contacts-block').removeClass('active');
	    event.stopPropagation();
	});


	//menu mobile
	$('#menu-mobile .inner-block').append($('.header .main-soc-block').clone());
	$('#menu-mobile .inner-block').append($('.header .main-menu-block').clone());
	$('#menu-mobile .inner-block').append($('.catalog-wrap .main-catalog-box').clone());


	//catalog
	$('.cat-item .photo-block .photo-item').eq($('.cat-item .color-select .active').index()).addClass('active');
	$('.cat-item').each(function() {
		$(this).find('.photo-item')
		.eq($(this).find('.color-select').find('.active').index()).addClass('active');
	})
	$('.cat-item .color-select a').on('click', function () {
	    if ($(this).hasClass('active')) {} else {
	        $(this).parents('.cat-item').find('.color-select').find('.active').removeClass('active');
	        $(this).parents('.cat-item').find('.photo-item').removeClass('active')
	            .eq($(this).index()).addClass('active');
	        $(this).addClass('active');
	    }
	    return false;
	})


	//counter   
	$('.frm-counter .btn-minus').bind('click', function(){
	    var cnt=$(this).parents('.frm-counter').find('input').val();
	    cnt=parseInt(cnt);
	    if (cnt>0) {
	        $(this).parents('.frm-counter').find('input').val(cnt-1);
	    }
	    return false;
	})
	$('.frm-counter .btn-plus').bind('click', function(){
	    var cnt=$(this).parents('.frm-counter').find('input').val();
	    $(this).parents('.frm-counter').find('input').val(cnt-1+2);
	    return false;
	})

	// photos box
	$('.photos-box').each(function() {
		$(this).children('.main-block').children('.item')
		.eq($(this).children('.preview-block').find('.active').index()).addClass('active');
	})
	$('.photos-box .preview-block a').on('click', function () {
	    if ($(this).hasClass('active')) {} else {
	    	$(this).parent('.preview-block').find('a').removeClass('active');
	        $(this).parents('.photos-box').children('.main-block').children('.item').removeClass('active')
	        .eq($(this).index()).addClass('active');
	        $(this).addClass('active');
	    }
	    return false;
	})

	$('.photo-wrap-box .photos-box').eq($('.product-box .color-select .active').index()).addClass('active');
	$('.product-box .color-select a').on('click', function () {
	    if ($(this).hasClass('active')) {} else {
	        $(this).parents('.product-box').find('.color-select').find('.active').removeClass('active');
	        $(this).parents('.product-box').find('.photos-box').removeClass('active')
	            .eq($(this).index()).addClass('active');
	        $(this).addClass('active');
	    }
	    return false;
	})


	//main banner
	$('.main-banner .slider').owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: true,
		smartSpeed: 1000,
		fluidSpeed: 1000,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		dotsSpeed: 1000,
		dragEndSpeed: 1000,
		responsiveRefreshRate: 100
	})


	// main slider
	$('.main-slider .slider').owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		autopalyTimeout: 3000,
		smartSpeed: 1000,
		fluidSpeed: 1000,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		dotsSpeed: 1000,
		dragEndSpeed: 1000,
		responsiveRefreshRate: 100,
		autoWidth: true,
		center: true,
		startPosition: 10
	})
});