$(function () {


    $('.header nav .menu').on('click', function () {

        var menuIndex = $(this).index();


        var sectionOffset = $('.section').eq(menuIndex).offset();
        console.log("@@ sectionOffset", sectionOffset);


        var offsetTop = sectionOffset.top;
        console.log("@@ offsetTop", offsetTop);


        $('html, body').animate({
            scrollTop: offsetTop - 60
        }, 600)

    })


    $('.back-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400)
    })


    $('.btn-menu').on('click', function () {
        $('html').toggleClass('open-side-menu')
    })


})

