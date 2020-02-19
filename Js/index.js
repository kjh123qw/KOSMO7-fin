

$(function(){


    // $('#navOptionDiv').click(function(){ // ID가 toggleButton인 요소를 클릭하면
	// 	var state = $('#toggleMenu').css('display'); // state 변수에 ID가 moreMenu인 요소의 display의 속성을 '대입'
	// 	if(state == 'none'){ // state가 none 상태일경우 
	// 		$('#toggleMenu').show("slide", { direction: "right" }, 400); // ID가 moreMenu인 요소를 show();
	// 	}else{ // 그 외에는
	// 		$('#toggleMenu').hide("slide", { direction: "right" }, 400); // ID가 moreMenu인 요소를 hide();			
	// 	}
	// });




	$("#t1").click(function(){
		// var offset = $('#mainDiv2').offset(); //선택한 태그의 위치를 반환

        //     //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

		// $('html').animate({scrollTop : offset.top}, 1000);
		
		$("#mainDiv").stop().animate({bottom:"100%"},1000)
		$("#mainDiv2").stop().animate({top:"0"},1000)


	})

	$("#t3").click(function(){
		$("#mainDiv").stop().animate({bottom:"0"},1000)
		$("#mainDiv2").stop().animate({top:"100%"},1000)
	})

       










})