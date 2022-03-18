// background scroll
$(window).scroll(function(){
    var scroll_pos = $(window).scrollTop()/3;
    $(".wrapper").css({
        'background-position-x': - scroll_pos + 'px',
    })
})