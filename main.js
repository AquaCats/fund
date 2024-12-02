$(document).ready(function() {
    $('#faq-question-1').on('click', function() {
        toggleAnswer('#faq-item-1', '#faq-answer-1', '#arrow-1');
    });

    $('#faq-question-2').on('click', function() {
        toggleAnswer('#faq-item-2', '#faq-answer-2', '#arrow-2');
    });

    $('#faq-question-3').on('click', function() {
        toggleAnswer('#faq-item-3', '#faq-answer-3', '#arrow-3');
    });

    $('#faq-question-4').on('click', function() {
        toggleAnswer('#faq-item-4', '#faq-answer-4', '#arrow-4');
    });

    function toggleAnswer(itemId, answerId, arrowId) {
        // Згортає всі інші відповіді
        $('#faq-answer-1, #faq-answer-2, #faq-answer-3, #faq-answer-4').slideUp();
        $('#faq-item-1, #faq-item-2, #faq-item-3, #faq-item-4').removeClass('active');

        // Розгортає або згортає відповідь на вибране питання
        if (!$(answerId).is(':visible')) {
            $(answerId).slideDown();
            $(itemId).addClass('active');
        }
    }
});