$(document).ready(function(){
    var i = 1
    $('#star').click(function(){
       $(this).css("-webkit-transform","rotate("+i*360+"deg)");
       i++;
    });
});