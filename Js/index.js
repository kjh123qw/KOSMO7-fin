

$(function(){

	// 메인 skip 버튼
	$("#skipBtn1").click(function(){
		$("#mainDiv1").stop().animate({bottom:"100%"},1000)
		$("#mainDiv2").stop().animate({top:"0"},1000,function(){
			$('#loginDiv').stop().delay(300).animate({right:"0"},500);
		})
	})
	// 메인 skip 버튼

	// 동영상 화면 이동
	$("#upBtn").click(function(){
		$("#mainDiv1").stop().animate({bottom:"0"},1000)
		$("#mainDiv2").stop().animate({top:"100%"},1000)

		
		$("#loginDiv").stop().animate({right:"-30%"},1000)
		$("#joinDiv").stop().animate({right:"-30%"},1000)
		$("#findDiv").stop().animate({right:"-30%"},1000)


	})
	// 동영상 화면 이동

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

       


	// 화면사이즈 실시간 width 리턴
	$( window ).resize(function() {
		var windowWidth = $( window ).width();
		console.log(windowWidth)
	 });
	 // 화면사이즈 실시간 width 리턴






})