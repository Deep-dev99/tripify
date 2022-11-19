$(document).ready( function()
{
    console.log("Everything is fine");

    $("ul,li").hover( function(){
        $("#pica").removeClass().addClass(
            $(this).attr("rel")
        );
        $(this).addClass("active").siblings().removeClass("active");
    });
});