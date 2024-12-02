$(document).ready(function() {
    // Оновлення значення при зміні положення бігунка
    $('#slider').on('input', function() {
        const value = $(this).val();
        let displayValue;

        // Якщо значення більше або рівне 1000 - конвертуємо в мільйони
        if (value >= 1000) {
            displayValue = (value / 1000) + 'М';
        } else {
            displayValue = value + ' тис';
        }

        $('#sliderValue').text(displayValue);
    });
});