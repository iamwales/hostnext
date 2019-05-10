$(function(){
	
	var menu = $('#menu'),
		pos = menu.offset();
		
		$(window).scroll(function(){
			if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('container_front_main')){
				menu.slideUp('fast', function(){
					$(this).removeClass('container_front_main').addClass('fixed').slideDown('fast');
					$(".Flat_mega_menu").css('border-bottom','0 none');
				});
			} else if($(this).scrollTop() <= pos.top && menu.hasClass('fixed')){
				menu.slideUp('fast', function(){
					$(this).removeClass('fixed').addClass('container_front_main').slideDown('fast');
					$(".Flat_mega_menu").css('border-bottom','1px dotted #e4e4e4');
				});
			}
		});

});