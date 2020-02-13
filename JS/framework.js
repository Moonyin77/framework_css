(function ($) {
    $('body').on('click', 'button.close', function () {
        $(this).parent().fadeToggle(1, function () {
            $(this).remove();
        });
    });
})(jQuery);