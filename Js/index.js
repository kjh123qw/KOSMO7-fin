

$(function(){

	/* 작성자 : 김정호 (읽은 후 삭제해도 됨 ㅎㅎ)
	
	var checkWidth;							// 전역변수로 가로 폭 체크를 위한 변수 선언

    $(window).resize(function(event){		// 가로 사이즈가 바뀔 때마다 호출됨
        checkWidth = $( window ).width();	// 전역 변수에 현재 가로 사이즈를 대입
    })
	
	가로 폭 사이즈가 바뀔 때마다 checkWidth에 대입 되기 때문에
	이 후 가로 폭에 따라 기능이 바뀌는 곳에서
	checkWidth를 가져와서 사용하면 됨
	
	----- 예시 -----
	if(checkWidth < 576){  // 가로폭을 576 이하로 줄이면 작동
		$("#mainDiv1").stop().animate({bottom:"100%"},1000)
		$("#mainDiv2").stop().animate({top:"0"},1000,)

		$("#loginDiv").css('z-index', 200);
		$("#joinDiv").css('z-index', 100);
		$("#findDiv").css('z-index', 100);
	}

	*/



	var test = 

	// 메인 skip 버튼
	$("#skipBtn1").click(function(){

		var width = returnWidth();

		if(width < 576){
			$("#mainDiv1").stop().animate({bottom:"100%"},1000)
			$("#mainDiv2").stop().animate({top:"0"},1000,)

			$("#loginDiv").css('z-index', 200);
			$("#joinDiv").css('z-index', 100);
			$("#findDiv").css('z-index', 100);
		}else if(width < 768){
			$("#mainDiv1").stop().animate({bottom:"100%"},1000)
			$("#mainDiv2").stop().animate({top:"0"},1000,)

			$("#loginDiv").css('z-index', 200);
			$("#joinDiv").css('z-index', 100);
			$("#findDiv").css('z-index', 100);
		}else if(width < 992){
			$("#mainDiv1").stop().animate({bottom:"100%"},1000)
			$("#mainDiv2").stop().animate({top:"0"},1000,function(){
				$('#loginDiv').stop().delay(300).animate({right:"0"},500);
			})
		}else if(width < 1200 ){
			$("#mainDiv1").stop().animate({bottom:"100%"},1000)
			$("#mainDiv2").stop().animate({top:"0"},1000,function(){
				$('#loginDiv').stop().delay(300).animate({right:"0"},500);
			})
		}else{
			$("#mainDiv1").stop().animate({bottom:"100%"},1000)
			$("#mainDiv2").stop().animate({top:"0"},1000,function(){
				$('#loginDiv').stop().delay(300).animate({right:"0"},500);
			})
		}



	})
	// 메인 skip 버튼

	// 동영상 화면 이동
	$("#upBtn").click(function(){

			

		var width = returnWidth();

		if(width < 576){
			$("#mainDiv1").stop().animate({bottom:"0"},1000)
			$("#mainDiv2").stop().animate({top:"100%"},1000)

			$("#loginDiv").css('z-index', 200);
			$("#joinDiv").css('z-index', 100);
			$("#findDiv").css('z-index', 100);

			$("#loginDiv").stop().animate({right:"0"},1000)
			$("#joinDiv").stop().animate({right:"0"},1000)
			$("#findDiv").stop().animate({right:"0"},1000)
		}else if(width < 768){
			$("#mainDiv1").stop().animate({bottom:"0"},1000)
			$("#mainDiv2").stop().animate({top:"100%"},1000)

			$("#loginDiv").css('z-index', 200);
			$("#joinDiv").css('z-index', 100);
			$("#findDiv").css('z-index', 100);

			$("#loginDiv").stop().animate({right:"0"},1000)
			$("#joinDiv").stop().animate({right:"0"},1000)
			$("#findDiv").stop().animate({right:"0"},1000)
		}else if(width < 992){

			$("#mainDiv1").stop().animate({bottom:"0"},1000)
			$("#mainDiv2").stop().animate({top:"100%"},1000)
			
			$("#loginDiv").stop().animate({right:"-40%"},1000)
			$("#joinDiv").stop().animate({right:"-40%"},1000)
			$("#findDiv").stop().animate({right:"-40%"},1000)

		}else if(width < 1200 ){

			$("#mainDiv1").stop().animate({bottom:"0"},1000)
			$("#mainDiv2").stop().animate({top:"100%"},1000)
			
			$("#loginDiv").stop().animate({right:"-40%"},1000)
			$("#joinDiv").stop().animate({right:"-40%"},1000)
			$("#findDiv").stop().animate({right:"-40%"},1000)
			
		}else{

			$("#mainDiv1").stop().animate({bottom:"0"},1000)
			$("#mainDiv2").stop().animate({top:"100%"},1000)
			
			$("#loginDiv").stop().animate({right:"-40%"},1000)
			$("#joinDiv").stop().animate({right:"-40%"},1000)
			$("#findDiv").stop().animate({right:"-40%"},1000)

		}

	

	})
	// 동영상 화면 이동

	//회원가입, 비밀번호찾기 화면전환
	$("#joinBtn").click(function(){

		var width = returnWidth();

		if(width < 576){

			$("#loginDiv").css('z-index', 200);
			$("#joinDiv").css('z-index', 100);
			$("#findDiv").css('z-index', 100);

			$("#loginDiv").stop().animate({right:"-100%"},500)
			$("#findDiv").stop().animate({right:"-100%"},500)

		}else if(width < 768){

			$("#loginDiv").css('z-index', 200);
			$("#joinDiv").css('z-index', 100);
			$("#findDiv").css('z-index', 100);

			$("#loginDiv").stop().animate({right:"-100%"},500)
			$("#findDiv").stop().animate({right:"-100%"},500)

		}else if(width < 992){

			$("#loginDiv").stop().animate({right:"-40%"},500,function(){
				$("#joinDiv").stop().delay(300).animate({right:"0"},500)
			})

		}else if(width < 1200){

			$("#loginDiv").stop().animate({right:"-40%"},500,function(){
				$("#joinDiv").stop().delay(300).animate({right:"0"},500)
			})

		}else{
			$("#loginDiv").stop().animate({right:"-40%"},500,function(){
				$("#joinDiv").stop().delay(300).animate({right:"0"},500)
			})
		}
		
	})

	$("#findBtn").click(function(){

		var width = returnWidth();

		if(width < 576){

			$("#loginDiv").css('z-index', 200);
			$("#joinDiv").css('z-index', 100);
			$("#findDiv").css('z-index', 100);

			$("#loginDiv").stop().animate({right:"-100%"},500)
			$("#joinDiv").stop().animate({right:"-100%"},500)

		}else if(width < 768){

			$("#loginDiv").css('z-index', 200);
			$("#joinDiv").css('z-index', 100);
			$("#findDiv").css('z-index', 100);

			$("#loginDiv").stop().animate({right:"-100%"},500)
			$("#joinDiv").stop().animate({right:"-100%"},500)

		}else if(width < 992){
			$("#loginDiv").stop().animate({right:"-40%"},500,function(){
				$("#findDiv").stop().delay(300).animate({right:"0"},500)
			})
		}else if(width < 1200){
			$("#loginDiv").stop().animate({right:"-40%"},500,function(){
				$("#findDiv").stop().delay(300).animate({right:"0"},500)
			})
		}else{
			$("#loginDiv").stop().animate({right:"-40%"},500,function(){
				$("#findDiv").stop().delay(300).animate({right:"0"},500)
			})
		}
	})

	$(".goLogin").click(function(){

		var width = returnWidth();

		if(width < 576){

			$("#loginDiv").css('z-index', 200);
			$("#joinDiv").css('z-index', 100);
			$("#findDiv").css('z-index', 100);

			$("#loginDiv").stop().animate({right:"0%"},1000)
			$("#joinDiv").stop().animate({right:"0%"},1000)
			$("#findDiv").stop().animate({right:"0%"},1000)

		}else if(width < 768){

			$("#loginDiv").css('z-index', 200);
			$("#joinDiv").css('z-index', 100);
			$("#findDiv").css('z-index', 100);

			$("#loginDiv").stop().animate({right:"0%"},1000)
			$("#joinDiv").stop().animate({right:"0%"},1000)
			$("#findDiv").stop().animate({right:"0%"},1000)

		}else if(width < 992){

			$("#joinDiv").stop().animate({right:"-40%"},500)
			$("#findDiv").stop().animate({right:"-40%"},500,function(){
				$("#loginDiv").stop().delay(300).animate({right:"0"},500)
			})

		}else if(width < 1200){
			$("#joinDiv").stop().animate({right:"-40%"},500)
			$("#findDiv").stop().animate({right:"-40%"},500,function(){
				$("#loginDiv").stop().delay(300).animate({right:"0"},500)
			})
		}else{
			$("#joinDiv").stop().animate({right:"-40%"},500)
			$("#findDiv").stop().animate({right:"-40%"},500,function(){
				$("#loginDiv").stop().delay(300).animate({right:"0"},500)
			})
		}
	})
	//회원가입, 비밀번호찾기 화면전환

	// $("#loginDiv").click(function(){
	// 	$("#loginDiv").stop().animate({right:"-30%"},500,function(){
	// 		$("#joinDiv").stop().delay(300).animate({right:"0"},500)
	// 	})
	// })

	// $("#joinDiv").click(function(){
	// 	$("#joinDiv").stop().animate({right:"-30%"},500,function(){
	// 		$("#loginDiv").stop().delay(300).animate({right:"0"},500)
	// 	})
	// })

       







})

function returnWidth(){
	var windowWidth;
	windowWidth = $( window ).width();
	return windowWidth;
}

function returnWidth2(){
	var windowWidth;
	$( window ).resize(function() {
		windowWidth = $( window ).width();
	 });
	 return windowWidth;
}