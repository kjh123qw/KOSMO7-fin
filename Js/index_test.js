$(function(){

    $('#test2 > p').hide();
    
    
    // $("#test6").on('mouseenter', function(){

    //     $(this).stop().animate({left: "45%"}, 500);
    //     // $('#s1').text('Skip -->');
    //     $("#s2").stop().animate({opacity:"1"}, 500);
    // });

    // $("#test6").on('mouseleave', function(){
        
    //     $(this).stop().animate({left: "50%"}, 500);
    //     // $('#s1').text('Skip');
    //     $("#s2").stop().animate({opacity:"0"}, 500);
    // });

    // $("#t1").on('mouseenter', function(){
    //     $(this).stop().animate({left: "47%"}, 500);
    // });

    // $("#t1").on('mouseleave', function(){
    //     $(this).stop().animate({left: "50%"}, 500);
    // });

    $("#t1").click(function(){
        alert("dasdfad")
    })




  

})


function menuOpen(){
    
    var classValue = $('#bar').attr('class');

    var bar= $("#bar");
       
    var flag = $("#check").is(":checked");
    // console.log(flag);
    // console.log(classValue)

    if(flag == true){ //체크

        setTimeout(function(){
            bar.attr('class','ooo');
        $("#check").prop("checked", false);
        },300)

        // bar.removeClass('xxx');
        

    }else{

        setTimeout(function(){
            bar.attr('class','xxx');
        $("#check").prop("checked", true);
        },300)

        // bar.addClass('xxx');

    }

    if(flag == true){
        $('#test2 > p').fadeOut(300);
        $("#test2").stop().delay(300).animate({
            top:"-200"
           },500,function(){
            // $('#test2 > p').stop().animate({opacity:0},5000);
            
           })
               
              
               
    }else{
       

           $("#test2").stop().animate({
            top:"0"
           },500,function(){
            // $('#test2 > p').stop().animate({opacity:1},3000);
            
            $('#test2 > p').fadeIn(300);
           })

           
    }

}

// function menuOver(){
//    $("#bar").stop().animate({
//     width:50
//    },500)


// }

// function menuOut(){
//     $("#bar").stop().animate({
//         width:26
//     },500)
// }


// function over(){
// 	test3.innerText = "Skip -> "
// }

// function out(){
// 	test3.innerText = "Skip"
// }

// function click(){
//     alert("ddd");
// }

function over(){
    $("#test4").stop().animate({left: "0"}, 500);
    $("#skip2").stop().hide(500);
}

function out(){
    $("#test4").stop().animate({left: "+30"}, 500);
    $("#skip2").stop().show(500);
}

function clickDiv(){
    alert("dddd")
}

