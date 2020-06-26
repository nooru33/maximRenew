$(function(){
	$("article").on("mouseenter",function(){
		$(this).stop().animate({"width":"50%"},1000, function(){
			//article이 넓어진 바로 후에 아래 구문이 실행됩니다.
			$(this).find("h3").stop().animate({"right":"10px"},400);
			$(this).find("p").stop().animate({"right":"10px"},800);	
		});
		$(this).find("video").stop().animate({"opacity":"0.9"},1200);	
		var vid = $(this).find("video").get(0);
		vid.currentTime=0;
		vid.play();	
	});
	
	$("article").on("mouseleave",function(){
		var vid = $(this).find("video").get(0);
		vid.pause();
		$(this).stop().animate({"width":"12%"},700);
		$(this).find("video").stop().animate({"opacity":"0"},2000);	
		$(this).find("h3").stop().animate({"right":"-700px"},200);
		$(this).find("p").stop().animate({"right":"-310px"},500);	
	});

});