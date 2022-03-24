$(".slider").owlCarousel({

    loop: true,
    autoplay: true,
    autoplayTimeout: 3000, //3000ms = 3s;
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        300: {
            items: 1,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        960: {
            items: 3,
            margin: 50,
            nav: false
        },
        1023: {
            items: 4,
            nav: false
        }


    }

});

// thêm chức năng chỉ vào img sẽ dừng lại
$('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
});