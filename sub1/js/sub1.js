	//<![CDATA[
	$(function(){
		
    $(".philosophy").on("mouseover focus",function(){ //마우스 올리고 Tab키 눌렀을때
       $(".the-b").css("display","block");
		
     });
		
		$("#sec2").click(function(){ //마우스 올리고 Tab키 눌렀을때
       $(".the-b").attr("display","block");
			$("#sec1").css("opacity","0");
		
     });
	
    $(".philosophy").on("mouseleave blur",function(){ //마우스 올리고 Tab키 눌렀을때
       $(".the-b").css("display","none");
		
     });
		
	});
	
//]]>