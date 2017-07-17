$(document).ready(function(){
	m_prod_catalog();
	listhover();

	  $(".booktable tr:even td").css({'background':'#fff'});

});

function m_prod_catalog(){
	var self = "";
	var self_top = "";
	var pos_nav_offsetTop = "";
	$("#m-prod-catalog li").hover(
		function(){
			self = $(this);
			self.addClass("hover").children("div").stop().slideDown("slow");
			//slideDown
		},
		function(){
			self = $(this);
			self.children("div").slideUp("fast");
			//slideUp
			self.removeClass("hover");
		}
	);
};


function listhover(){
	var self = "";
	$(".shubookList li").hover(
		function(){
			self = $(this);
			self.addClass("hover").siblings().removeClass('hover');
			//slideDown
		}
	);
};


$(function(){
	$('#navigation li a').append('<span class="hover"></span>')
	$('#navigation li a').hover(function(){
		$('.hover', this).stop().animate({'opacity': 1}, 700,'easeOutSine')
	},function(){
		$('.hover', this).stop().animate({'opacity': 0}, 700, 'easeOutQuad')
	});
	
});
	

$(function(){
  $(".bxslider li ul li").hover(function(){ 
    $(".x",this).stop().css({'left':'35px'}).animate({'left':"40px"},400).show();
    $(".y",this).stop().css({'right':'35px'}).animate({'right':"40px"},400).show();
    $('.fire',this).fadeIn(500);
  },function(){
    // $('.x, .y',this).stop().animate({"top":"30px"},400);
    $('.fire, .x, .y',this).fadeOut(500);
  }); 
});


