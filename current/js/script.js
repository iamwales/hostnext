/*! Changer */
$(function () {
    // below works for hash added in the browser.
    var hash = location.hash;
    if(hash.length){
        $('#nav_tabbed a').removeClass('server_active');
        $('#menu_container div').hide();
        $('#nav_tabbed a[href*="' + hash + '"]').addClass('server_active');
        $('#menu_container div[id*="' + hash.slice(1) + '"]').fadeIn();
		
    }

    // below works for click of the anchors
    $('#nav_tabbed a').click(function(e){
        e.preventDefault();
        $(this).addClass('server_active').siblings('a').removeClass('server_active');
        $('#menu_container div').hide();
        $('#menu_container div[id*="'+this.getAttribute('href').slice(1)+'"]').fadeIn();
    });
});

$(function () {
    $('#nav_tabbed a').click(function(e){
        e.preventDefault();
        $(this).addClass('server_active').siblings('a').removeClass('server_active');
        $('#menu_container div').hide();
        $('#menu_container div[id*="'+this.getAttribute('href').slice(1)+'"]').show();
		window.scrollTo(0, 0)
    });
});




var dropdowns = $(".dropdown");

// Onclick on a dropdown, toggle visibility
dropdowns.find("dt").click(function(){
	dropdowns.find("dd ul").hide();
	$(this).next().children().toggle();
});

// Clic handler for dropdown
dropdowns.find("dd ul li a").click(function(){
	var leSpan = $(this).parents(".dropdown").find("dt a span");
  
	// Remove selected class
	$(this).parents(".dropdown").find('dd a').each(function(){
    $(this).removeClass('selected');
  });
  
	// Update selected value
	leSpan.html($(this).html());
  
	// If back to default, remove selected class else addclass on right element
	if($(this).hasClass('default')){
    leSpan.removeClass('selected')
  }
	else{
		leSpan.addClass('selected');
		$(this).addClass('selected');
	}
  
	// Close dropdown
	$(this).parents("ul").hide();
});

// Close all dropdown onclick on another element
$(document).bind('click', function(e){
	if (! $(e.target).parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});



	 // DOM ready
	 $(function() {
	   
      // Create the dropdown base
      $("<select />").appendTo("#main_section_menu");
      
      // Create default option "Go to..."
      $("<option />", {
         "selected": "selected",
         "value"   : "",
         "text"    : "Select Page..."
      }).appendTo("#main_section_menu select");
      
      // Populate dropdown with menu items
      $("#main_section_menu a").each(function() {
       var el = $(this);
       $("<option />", {
           "value"   : el.attr("href"),
           "text"    : el.text()
       }).appendTo("#main_section_menu select");
      });
      

      $("#main_section_menu select").change(function() {
        window.location = $(this).find("option:selected").val();
      });
	 
	 });
	 


$(window).load(function(){
$(document).ready(function(){
    $(".divs div").each(function(e) {
        if (e != 0)
            $(this).hide();
    });
    
    $("a[id=next]").click(function(){
        if ($(".divs div:visible").next().length != 0)
            $(".divs div:visible").next().show().prev().hide();
        else {
            $(".divs div:visible").hide();
            $(".divs div:first").show();
        }
        return false;
    });

    $("a[id=prev]").click(function(){
        if ($(".divs div:visible").prev().length != 0)
            $(".divs div:visible").prev().show().next().hide();
        else {
            $(".divs div:visible").show();
            $(".divs div:last").show();
        }
        return false;
    });
	
});


}); 




$(window).load(function(){
    $('#s').keyup(function() {
        var textboxVal = $(this).val().toLowerCase();
        $('.domain_pricing_list ul').each(function() {
            var listVal = $(this).text().toLowerCase();
            if(listVal.indexOf(textboxVal) >= 0) {
                $(this).slideDown('200');
            } else {
                $(this).slideUp('200');
            }
        });
    });
});




//Toggle Hide/Show sidebar slowy
$(document).ready(function(){
	 $('#A').toggle();
	$('#B').click(function(e) {
		e.preventDefault();
		$('#A').toggle('');
		$('#B').toggleClass('extended-panel'); 	
		return false;  
	});
}); 

function resizebg(){
        $('#A').css("height", $(document).height());
    }
    $(window).resize(function(){
        resizebg(); 
    });
    $(document).scroll(function(){
        resizebg(); 
    });
    //initial call
resizebg();

$(window).load(function(){
function scrollCheck() {
    var $right = $('#right'),
        scrollTop = $(window).scrollTop(),
        windowHeight = $(window).height(),
        docHeight = $(document).height(),
        rightHeight = $right.height(),
        distanceToTop = rightHeight + 110 - windowHeight,
        distanceToBottom = scrollTop + windowHeight + 110 - docHeight;
    if (scrollTop > distanceToTop) {
        
        $right.css({
            'position': 'fixed',
            'bottom': (scrollTop + windowHeight + 110 > docHeight ? distanceToBottom  + 'px' : '0px')
        });
    }
    else {
        $right.css({
            'position': 'relative',
            'bottom': 'auto'
        });
    }
}

$(window).bind('scroll', scrollCheck);

});