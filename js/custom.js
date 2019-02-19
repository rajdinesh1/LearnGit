// JavaScript Document
$(document).ready(function(e) {
	$(".mobile_nav").click(function(){
		$(".header_nav").slideToggle(300);
	});
    $("ul.header_nav_menu li a").click(function(){
		$("ul.header_nav_menu li a").removeClass('active');
		$(this).addClass('active');
	});	
});