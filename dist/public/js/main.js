$(document).ready(() => {

    /*$("#padbutton").on('click', (e) => {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('#section2').offset().top }, 0, 'linear');
    });*/

    $(".navbar-burger").click(() => {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });    
});