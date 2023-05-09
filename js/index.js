$(window).scroll(function(){
    var height = $(window).scrollTop();
    if(height > 150){
        $(".navigation").css({"position": "fixed"});
    } else{
        $(".navigation").css({"position": "relative"});
    }
    });