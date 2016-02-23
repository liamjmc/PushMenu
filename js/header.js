$(window).scroll(function(){
    var pixelsToTop = $(window).height() - 40;
    var fixedClass = "fixed-header";
    
    if($(document).scrollTop() >= pixelsToTop){
        $("#logo-row").addClass(fixedClass);
    }
    else{
        $("#logo-row").removeClass(fixedClass);
    }
});