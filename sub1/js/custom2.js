$(document).ready(function(){

	//변수 ht에 브라우저의 높이값을 저장
	var ht = $(window).height();	
	//브라우저의 높이값을 section의 높이값으로 지정
	$(").height(ht);
	
	//브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("").height(ht);
	});	
	
	
	var nav = $('nav');
    var navoffset = $('nav').offset();  
    /* offset을 이용하여 .menu(메뉴영역)의 위치값을 알아내어 navoffset에 넣어둔다 */
    $(window).scroll(function () {
        if ($(this).scrollTop() >= navoffset.top) {  /* 화면 스크롤 값이 메뉴영역의 top보다 값이 커지면 */
            nav.css('position','fixed').css('top',0).css('background','rgba(57,91,9,0.9'); /* 화면 위쪽에 고정시킨다. */
        }else {
            nav.css('position','absolute').css('top',70).css('background','transparent'); /* 처음 메뉴영역의 top 값으로 돌리기 */
        }
    });
	
	
	//메뉴 버튼 클릭시
	$("#menu_top li").on("click",function(e){
		e.preventDefault();
		
		//변수 ht에 브라우저의 높이값 저장
		var ht = $(window).height();
		
		//변수 i에 현재 클릭한 li의 순서값을 저장
		var i = $(this).index();
		
		//브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일
		var nowTop = i*ht;			
	
		//해당 스크롤 위치값으로 문서를 이동
		$("html,body").stop().animate({"scrollTop":nowTop},1400);
	});
	
	
	
	//메뉴 오른쪽 클릭시
	$("#menu_right li").on("click",function(e){
		e.preventDefault();
		
		//변수 ht에 브라우저의 높이값 저장
		var ht = $(window).height();
		
		//변수 i에 현재 클릭한 li의 순서값을 저장
		var i = $(this).index();
		
		//브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일
		var nowTop = i*ht;			
	
		//해당 스크롤 위치값으로 문서를 이동
		$("html,body").stop().animate({"scrollTop":nowTop},1400);
	});
	
	
	$(window).on("scroll",function(){	
	
		//변수 ht에 현재 브라우저의 넓이값 저장
		var ht = $(window).height();
		
		//변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll = $(window).scrollTop();
		

		for(var i=0; i<5;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$("#menu_top li").removeClass();
				$("#menu_top li").eq(i).addClass("on");
			};
		}							
	
	});
	
	$(window).on("scroll",function(){	
	
		//변수 ht에 현재 브라우저의 넓이값 저장
		var ht = $(window).height();
		
		//변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll = $(window).scrollTop();
		

		for(var i=0; i<5;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$("#menu_top li").removeClass();
				$("#menu_top li").eq(i).addClass("on");
			};
		}							
	
	});
	
	
	$(window).on("scroll",function(){	
	
		//변수 ht에 현재 브라우저의 넓이값 저장
		var ht = $(window).height();
		
		//변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll = $(window).scrollTop();
		

		for(var i=0; i<5;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$("#menu_right li").removeClass();
				$("#menu_right li").eq(i).addClass("on");
			};
		}							
	
	});
	
	
	section위에서 마우스 휠을 움직이면
		$("section").on("mousewheel",function(event,delta){    
		
		//마우스 휠을 올렸을때	
          if (delta > 0) {  
			//변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
             var prev = $(this).prev().offset().top;
			 //문서 전체를 prev에 저장된 위치로 이동
			 $("html,body").stop().animate({"scrollTop":prev},1400);
			 
		//마우스 휠을 내렸을때	 
          }else if (delta < 0) {  
			//변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
			 var next = $(this).next().offset().top;
			 //문서 전체를 next에 저장된 위치로 이동
			 $("html,body").stop().animate({"scrollTop":next},1400);                                         
          }
          
     });
	
	
	
	
	//각각의 section에서 마우스를 움직이면
	$("section").on("mousemove",function(e){		
	
		//변수 posX에 마우스 커서의 x축 위치 저장
		var posX= e.pageX;
		//변수 posY에 마우스 커서의 y축 위치 저장
		var posY= e.pageY;
		
	//첫 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
	$(".p11").css({"right":20-(posX/30) , "bottom":20-(posY/30) });
	$(".p12").css({"right":130+(posX/20) , "bottom":-40+(posY/20) });
	$(".p13").css({"right":60+(posX/20) , "top":180+(posY/20) });	
	
	//두 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
	$(".p21").css({"right":-180-(posX/30) , "bottom":-480-(posY/30) });
	$(".p22").css({"right":130+(posX/50) , "bottom":-40+(posY/50) });
		
	//세 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
	$(".p31").css({"right":280-(posX/30) , "bottom":30-(posY/30) });
	$(".p32").css({"right":110+(posX/20) , "bottom":-270+(posY/20) });
	$(".p33").css({"right":-70+(posX/20) , "bottom":-130+(posY/20) });	
		
	//네 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
	$(".p41").css({"right":20-(posX/30) , "bottom":-120-(posY/30) });
	$(".p42").css({"right":0+(posX/20) , "bottom":-180+(posY/20) });
	
		
	});
	
	
	
	
	
	//menu_top 움직일때 배경 투명도			
	/*var speed = 500;
				var header = 0;

$(window).scroll(function(){
    if($(document).scrollTop() > 0) {
	
		if(header == 0) {
			
           header = 1;
            $('#menu_top').stop().animate({ marginTop:'0px' }, speed);
			$('header').stop().animate({backgroundColor:'rgba(255,255,255,1)',marginTop:'px'},speed);
			
			$('.logo').stop().animate({ marginTop:'0px' }, speed);
			$('.sns').stop().animate({ marginTop:'0px' }, speed);
			
        }
		
    } else {
        
		if(header == 1) {
			
           header = 0;
            $('#menu_top').stop().animate({ marginTop:'0px' },speed);
			$('header').stop().animate({backgroundColor:'transparent' ,marginTop:'0px'},speed);
			
			$('.logo').stop().animate({ marginTop:'0px' }, speed);
			$('.sns').stop().animate({ marginTop:'0px' }, speed);
			
        }  
    };
	});*/
	
	
});















