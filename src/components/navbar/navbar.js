$(function() {
    $('.menu-mobile').click(function() {
        $('.navbar, .menu-mobile').toggleClass('active');
        $('.brand, .shop, .information, .search').fadeToggle(0);
    });
})

$(window).on('resize', function () {
    var win = $(this);
    if (win.width() >= 992) {
        $('.brand, .shop, .information, .search').show();
    }
});
