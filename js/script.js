$(function() {
    //MENU
    $("#goTop,h1").click(function() {
        if($("body").hasClass("active")){
            $("body").removeClass("active");
            return false;
        }
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.stop().animate({scrollTop: 0},$(window).scrollTop()/10);
    })
    $("#main").click(function() {
        if($("body").hasClass("active")){
            $("body").removeClass("active");
            return false;
        }
    })
    $("nav").click(function() {
        if($("body").hasClass("active")){
            $("body").removeClass("active");
        }
    })
    $("#menuBtn").click(function() {
        $("body").toggleClass("active");
    })
    $(window).scroll(function(){
        // 設變數WRAP
        var WRAP = $(".wrap");
        if($(window).width() > 980 && $(window).scrollTop() > $(".header_content").height() - $("nav").height()){
            WRAP.addClass("fixed");
        }else{
            WRAP.removeClass("fixed");
        }
    })
})