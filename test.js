$(document).ready(function() {
    $('#orange img').mouseenter(function(){
    	$(this).css("background-color","#ff7c55");
    	$('#hidden').css("display","block");
    });



    $('#orange img').mouseleave(function(){
    	$(this).css("background-color","#ff5c33");
    	$('#hidden').css("display","none");

    });


});