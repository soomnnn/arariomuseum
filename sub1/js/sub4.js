//<![CDATA[
	$(function(){
	
		$(".floorf").mouseover(function(){
			$(".img6").css("opacity","1");
		});
		
		$(".floorf").mouseleave(function(){ 
			$(".img6").css("opacity","0"); 
		});
		
		$(".floorko").mouseover(function(){
			$(".img5").css("opacity","1"); 
		});
		
		$(".floorko").mouseleave(function(){ 
			$(".img5").css("opacity","0"); 
		});
		
		$(".floorbra").mouseover(function(){
			$(".img4").css("opacity","1"); 
		});
		
		$(".floorbra").mouseleave(function(){ 
			$(".img4").css("opacity","0"); 
		});
		
		$(".floorcafe").mouseover(function(){ 
			$(".img3").css("opacity","1"); 
		});
		
		$(".floorcafe").mouseleave(function(){ 
			$(".img3").css("opacity","0"); 
		});
		
		$(".floorfrit").mouseover(function(){ 
			$(".img2").css("opacity","1"); 
		});
		
		$(".floorfrit").mouseleave(function(){ 
			$(".img2").css("opacity","0"); 
		});
		
		
		$(".floorf").on("click",function(){
		$("#explain").show("slow").css("opacity","1");
			$("#explain2").hide("8000");
			$("#explain3").hide("8000");
			$("#explain4").hide("8000");
			$("#explain5").hide("8000");
			
		});



/*	
	
$(".floorf").on("click",function(){
		$("#explain").show("slow").css("opacity","1");
			$("#explain2").hide("8000").css("opacity","0");
			$("#explain3").hide("8000").css("opacity","0");
			$("#explain4").hide("8000").css("opacity","0");
			$("#explain5").hide("8000").css("opacity","0");
});		
	
*/			
		$(".floorko").on("click",function(){
			$("#explain2").show("slow").css("opacity","1");
				$("#explain").hide("8000");
			$("#explain3").hide("8000");
			$("#explain4").hide("8000");
			$("#explain5").hide("8000");
		});
	
		$(".floorbra").on("click",function(){
			$("#explain3").show("slow").css("opacity","1");
			$("#explain").hide("8000");
			$("#explain2").hide("8000");
			$("#explain4").hide("8000");
			$("#explain5").hide("8000");
			
		});
		
		$(".floorcafe").on("click",function(){
			$("#explain4").show("slow").css("opacity","1");
			$("#explain2").hide("8000");
			$("#explain3").hide("8000");
			$("#explain").hide("8000");
			$("#explain5").hide("8000");
		});
		
		$(".floorfrit").on("click",function(){
			$("#explain5").show("slow").css("opacity","1");
			$("#explain2").hide("8000");
			$("#explain3").hide("8000");
			$("#explain4").hide("8000");
			$("#explain").hide("8000");
		});
		
	
	
	
	
	
	
	
/*	
	$(".floorko").on("click",function(){
		$("#explain2").show("slow").css("opacity","1");
			$("#explain").hide("8000").css("opacity","0");
			$("#explain3").hide("8000").css("opacity","0");
			$("#explain4").hide("8000").css("opacity","0");
			$("#explain5").hide("8000").css("opacity","0");
});		
	*/
	
	
	
		
		$(".shoplist1").on("mouseover focus",function(){
			$(".shop1").css("display","block");
		});
		$(".shoplist1").on("mouseleave focus",function(){
			$(".shop1").css("display","none");
		});
		
		$(".shoplist2").on("mouseover focus",function(){
			$(".shop2").css("display","block");
		});
		$(".shoplist2").on("mouseleave focus",function(){
			$(".shop2").css("display","none");
		});
		
		$(".shoplist3").on("mouseover focus",function(){
			$(".shop3").css("display","block");
		});
		$(".shoplist3").on("mouseleave focus",function(){
			$(".shop3").css("display","none");
		});
		
		$(".shoplist4").on("mouseover focus",function(){
			$(".shop4").css("display","block");
		});
		$(".shoplist4").on("mouseleave focus",function(){
			$(".shop4").css("display","none");
		});
		
		$(".shoplist5").on("mouseover focus",function(){
			$(".shop5").css("display","block");
		});
		$(".shoplist5").on("mouseleave focus",function(){
			$(".shop5").css("display","none");
		});
		
		$(".shoplist6").on("mouseover focus",function(){
			$(".shop6").css("display","block");
		});
		$(".shoplist6").on("mouseleave focus",function(){
			$(".shop6").css("display","none");
		});
		
		$(".shoplist7").on("mouseover focus",function(){
			$(".shop7").css("display","block");
		});
		$(".shoplist7").on("mouseleave focus",function(){
			$(".shop7").css("display","none");
		});
		
		$(".shoplist8").on("mouseover focus",function(){
			$(".shop8").css("display","block");
		});
		$(".shoplist8").on("mouseleave focus",function(){
			$(".shop8").css("display","none");
		});
		
		$(".shoplist9").on("mouseover focus",function(){
			$(".shop9").css("display","block");
		});
		$(".shoplist9").on("mouseleave focus",function(){
			$(".shop9").css("display","none");
		});
		
		$(".shoplist10").on("mouseover focus",function(){
			$(".shop10").css("display","block");
		});
		$(".shoplist10").on("mouseleave focus",function(){
			$(".shop10").css("display","none");
		});
		
		$(".shoplist11").on("mouseover focus",function(){
			$(".shop11").css("display","block");
		});
		$(".shoplist11").on("mouseleave focus",function(){
			$(".shop11").css("display","none");
		});
		
		$(".shoplist12").on("mouseover focus",function(){
			$(".shop12").css("display","block");
		});
		$(".shoplist12").on("mouseleave focus",function(){
			$(".shop12").css("display","none");
		});
		
		$(".shoplist13").on("mouseover focus",function(){
			$(".shop13").css("display","block");
		});
		$(".shoplist13").on("mouseleave focus",function(){
			$(".shop13").css("display","none");
		});
		
		$(".shoplist14").on("mouseover focus",function(){
			$(".shop14").css("display","block");
		});
		$(".shoplist14").on("mouseleave focus",function(){
			$(".shop14").css("display","none");
		});
		
		$(".shoplist15").on("mouseover focus",function(){
			$(".shop15").css("display","block");
		});
		$(".shoplist15").on("mouseleave focus",function(){
			$(".shop15").css("display","none");
		});
		
		$(".shoplist16").on("mouseover focus",function(){
			$(".shop16").css("display","block");
		});
		$(".shoplist16").on("mouseleave focus",function(){
			$(".shop16").css("display","none");
		});
		
		
		
    $(".philosophy").on("mouseover focus",function(){ //마우스 올리고 Tab키 눌렀을때
       $(".the-b").css("display","block");
		
     });
		
		$("#sec2").click(function(){ //마우스 올리고 Tab키 눌렀을때
       $(".the-b").attr("display","block");
		
     });
      
	
	
    $(".philosophy").on("mouseleave blur",function(){ //마우스 올리고 Tab키 눌렀을때
       $(".the-b").css("display","none");
		
     });
		
		
		
	});
	
//]]>