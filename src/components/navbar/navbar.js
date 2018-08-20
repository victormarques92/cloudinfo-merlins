$(function() {
    $('.menu-mobile').click(function() {
        $('.navbar, .menu-mobile').toggleClass('active');
        $('.brand, .shop, .information, .search').fadeToggle(0);
    });
})
