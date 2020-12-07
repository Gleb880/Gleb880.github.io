// Модальное окно

// открыть по кнопке
$('.anim').click(function () {
    $('.main').css('filter', 'blur(5px)');
    $('.lightbox-basic').fadeIn();
    $('.lightbox-basic').addClass('disabled');
}); 

// закрыть на крестик
$('.x-button').click(function () {
    $('.lightbox-basic').fadeOut();
    $('.main').css('filter', 'none');
});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
    var popup = $('.main');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.lightbox-basic').fadeOut();
        $('.main').css('filter', 'none');
    }
});