$(document).ready(function() {
    $(".nav-group > li > a").click(function(e){
        e.preventDefault();
        $(this).children(".drop-down").toggle();
    })
});