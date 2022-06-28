$(document).ready(function(){
    $("#Mypagenav ul.sub").hide();
    $("#Mypagenav ul.Mypagemenu li").click(function(){
        $("ul",this).slideToggle("fast");
    });
});