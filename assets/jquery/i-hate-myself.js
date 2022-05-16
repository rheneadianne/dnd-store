
let cartItem = $(this).siblings('.item-name').text();
let please = '<article class="cart-item"><p class="cart-name">Sword</p><p class="cart-price">10 GP</p><button class="add-more" type="button">+</button><p class="quantity">1</p><button class="remove-from-cart" type="button">-</button></div></article ></aside >'

$('.add-to-cart').click(function () {
    $(please).appendTo($('.cart'));
    alert($(this).siblings('.item-name').text())
})