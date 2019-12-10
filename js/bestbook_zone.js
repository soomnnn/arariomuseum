// JavaScript Document
$(function(){
 /* 베스트북 슬라이더 */
 
  var mySlider=$("#explain_img ul").bxSlider({
      mode:"horizontal",
        speed:250,
        pager:false,
        moveSlides:1,
        slideWidth:550,
        minSlides:1,       // 이미지 갯수를 넣을수 있음.
        maxSlides:4,
        slideMargin:50,
        auto:true,
        autoHover:true,
        controls:false,
	   	pause: 1500,
	  pager:true
  });

  $(".prev_btn2").on("click",function(){
  mySlider.goToPrevSlide();
  return false;
  });

  $(".next_btn2").on("click",function(){
  mySlider.goToNextSlide();
  return false;
  });
  
	
	var mySlider=$("#explain_img2 ul").bxSlider({
      mode:"horizontal",
        speed:250,
        pager:false,
        moveSlides:5,
        slideWidth:550,
        minSlides:1,       // 이미지 갯수를 넣을수 있음.
        maxSlides:2,
        slideMargin:50,
        auto:true,
        autoHover:true,
        controls:false,
	   	pause: 1500,
	  pager:true
  });

  $(".prev_btn3").on("click",function(){
  mySlider.goToPrevSlide();
  return false;
  });

  $(".next_btn3").on("click",function(){
  mySlider.goToNextSlide();
  return false;
  });

	
	
	var mySlider=$("#explain_img3 ul").bxSlider({
      mode:"horizontal",
        speed:250,
        pager:false,
        moveSlides:5,
        slideWidth:550,
        minSlides:1,       // 이미지 갯수를 넣을수 있음.
        maxSlides:4,
        slideMargin:50,
        auto:true,
        autoHover:true,
        controls:false,
	   	pause: 1500,
	  pager:true
  });

  $(".prev_btn4").on("click",function(){
  mySlider.goToPrevSlide();
  return false;
  });

  $(".next_btn4").on("click",function(){
  mySlider.goToNextSlide();
  return false;
  });
  
	
var mySlider=$("#explain_img4 ul").bxSlider({
      mode:"horizontal",
        speed:250,
        pager:false,
        moveSlides:5,
        slideWidth:550,
        minSlides:1,       // 이미지 갯수를 넣을수 있음.
        maxSlides:2,
        slideMargin:50,
        auto:true,
        autoHover:true,
        controls:false,
	   	pause: 1500,
	  pager:true
  });

  $(".prev_btn5").on("click",function(){
  mySlider.goToPrevSlide();
  return false;
  });

  $(".next_btn5").on("click",function(){
  mySlider.goToNextSlide();
  return false;
  });
	
	
	
	
var mySlider=$("#explain_img5 ul").bxSlider({
      mode:"horizontal",
        speed:250,
        pager:false,
        moveSlides:5,
        slideWidth:550,
        minSlides:1,       // 이미지 갯수를 넣을수 있음.
        maxSlides:4,
        slideMargin:50,
        auto:true,
        autoHover:true,
        controls:false,
	   	pause: 1500,
	  pager:true
  });

  $(".prev_btn6").on("click",function(){
  mySlider.goToPrevSlide();
  return false;
  });

  $(".next_btn6").on("click",function(){
  mySlider.goToNextSlide();
  return false;
  });
  
 });  