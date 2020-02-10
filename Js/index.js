

$(function(){


    $('#navOptionDiv').click(function(){ // ID가 toggleButton인 요소를 클릭하면
		var state = $('#toggleMenu').css('display'); // state 변수에 ID가 moreMenu인 요소의 display의 속성을 '대입'
		if(state == 'none'){ // state가 none 상태일경우 
			$('#toggleMenu').show("slide", { direction: "right" }, 400); // ID가 moreMenu인 요소를 show();
		}else{ // 그 외에는
			$('#toggleMenu').hide("slide", { direction: "right" }, 400); // ID가 moreMenu인 요소를 hide();			
		}
	});



})