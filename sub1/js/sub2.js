
	//<![CDATA[
	$(function(){
		$(".left").mouseover(function(){ //<a>에 마우스를 올렸을 때...
			$(".right").css("opacity",".5"); //<a>에 배경 속성을 지웁니다.
			
		});
		$(".left").mouseout(function(){
			$(".right").css("opacity","1")					  
		});
		
		$(".right").mouseover(function(){ //<a>에 마우스를 올렸을 때...
			$(".left").css("opacity",".5"); //<a>에 배경 속성을 지웁니다.

		});
		$(".right").mouseout(function(){
			$(".left").css("opacity","1")					  
		});
		
		
		
  
      
	
	
    $(".philosophy").on("mouseleave blur",function(){ //마우스 올리고 Tab키 눌렀을때
       $(".the-b").css("display","none");
		
     });
		
		

		
	
       $(".square1",).on("click",function(){
          $("#space").animate({marginLeft:"1000px"},500);
		   $("section").animate({marginLeft:"600px"},500);
		
		  
        });	
		
		
		
	$(".square2").on("click",function(){
          $("#space").animate({marginLeft:"-1150px"},500);
		   $("section").animate({marginLeft:"-590px"},500);
		
		  
        });	
		
		
	$(".square1").on("click",function(){
          $("#jejulist").animate({marginRight:"-1200px"},500);
		   $("section").animate({marginRight:"-700px"},500);
        });	
		
	$(".square2").on("click",function(){
          $("#jejulist").animate({marginRight:"1100px"},500);
		   $("section").animate({marginLeft:"-590px"},500);
		  
        });	
		
	$(".sec0",).on("click",function(){
          $("#space").animate({marginLeft:"1000px"},500);
		   $("section").animate({marginLeft:"600px"},500);
        });	
		
	$(".sec0").on("click",function(){
          $("#jejulist").animate({marginRight:"-1200px"},500);
		   $("section").animate({marginRight:"-700px"},500);
        });	
	
	$(".sec1").on("click",function(){
          $("#jejulist").animate({marginRight:"1100px"},500);
		   $("section").animate({marginLeft:"-590px"},500);
		$("#space").animate({marginLeft:"-1150px"},500);
		  
        });	
	$(".sec2").on("click",function(){
          $("#jejulist, .dongmun1").animate({marginRight:"1100px"},500);
		   $("section").animate({marginLeft:"-590px"},500);
		$("#space").animate({marginLeft:"-1150px"},500);
		
		  
        });	
	
	$(".sec3").on("click",function(){
          $("#jejulist, .dongmun2").animate({marginRight:"1100px"},500);
		   $("section").animate({marginLeft:"-590px"},500);
		$("#space").animate({marginLeft:"-1150px"},500);
		  
        });	
		
	$(".top_seoul",).on("click",function(){
          $("#space").animate({marginLeft:"1000px"},500);
		   $("section").animate({marginLeft:"600px"},500);
        });	
		
	$(".top_seoul").on("click",function(){
          $("#jejulist").animate({marginRight:"-1200px"},500);
		   $("section").animate({marginRight:"-700px"},500);
        });	
		
	$(".top_jeju").on("click",function(){
          $("#space").animate({marginLeft:"-1150px"},500);
		   $("section").animate({marginLeft:"-590px"},500);
		
        });	
		
	$(".top_jeju").on("click",function(){
          $("#jejulist").animate({marginRight:"1100px"},500);
		   $("section").animate({marginLeft:"-590px"},500);
		  
        });	
		
	
	$(".top_jeju").on("click",function(){
		$(".top_seoul").css("background","#fff");
		
	});
		
	});
	
//]]>
	
