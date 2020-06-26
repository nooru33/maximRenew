$(function(){
	$("article").on("mouseover",function(){
		$(this).stop().animate({"width":"35%"},1000, function(){
			//article이 넓어진 바로 후에 아래 구문이 실행됩니다.
			$(this).find("h3").stop().animate({"right":"10px"},400);
			$(this).find("p").stop().animate({"right":"10px"},800);	
		});
		
	});

});