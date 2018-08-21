var obj = false;

$.ajax({
    type: 'GET',
    url: './js/plugins/potions.json',
    contentType: 'application/json',
    success: function (data) {
        obj = data.potions;

        var content = $('.potions .row');


        $.each(obj, function (i) {
            $(content).append($('<div class="col-6 col-md-4"><figure class="box-potions" data-id="' + obj[i].id + '"><img class="img-responsive" src="' + obj[i].image + '" alt="' + obj[i].effect + '" data-id="' + obj[i].id + '"/><figcaption class="product-name">' + obj[i].name + ' - <span class="price">$' + obj[i].price + '</figcaption></figure></div>'));
        });
    }
});


$(document).ready(function () {
    $('.box-potions').click(function () {
        var contentModal = $('.modal-content')
        var dataId = $(this).attr('data-id');
        var potion = obj[dataId];

        contentModal.find('img').attr('src', potion.image);
        contentModal.find('img').attr('alt', potion.effect);
        contentModal.find('.product-name').html(potion.name);
        contentModal.find('.product-effect').html(potion.effect);
        contentModal.find('.ingredients').html('');

        for (x in potion.ingredients) {
            contentModal.find('.ingredients').append($('<li>'+ potion.ingredients[x] +'</li>'));
        }

        contentModal.find('.price').html('$'+potion.price);

        $('.modal').fadeIn();
    });

    $('.close, .btn-cart').click(function() {
        $('.modal').fadeOut();
    });

    var bag = 0;

    $('.btn-cart').click(function() {
        bag++;
        $('.qtd-bag').html(bag);

    });
});
