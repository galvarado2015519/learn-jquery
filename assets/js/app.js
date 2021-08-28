$(function() {
    $('#btn-asterisco').click(function() {
        $('*').addClass('selector');
    });
    $('#btn-id').click(function() {
        $('#correo').addClass('selector');
    });
    $('#btn-clase').click(function() {
        $('.campo').addClass('selector');
    });
    $('#btn-div').click(function() {
        $('div').addClass('selector');
    });
    $('#btn-p').click(function() {
        $('p').addClass('selector');
    });
    $('#btn-input').click(function() {
        $('input').addClass('selector');
    });
});