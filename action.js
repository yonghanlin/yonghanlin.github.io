$(document).ready(function(){
    $(".menu-item").click(function(){
        var target = "#".concat($(this).attr("name"));
        console.log($(target).offset().top)
        console.log($(".menu").css("height"))
        $('html,body').animate({
            scrollTop:$(target).offset().top-50
        },500);
    })
})