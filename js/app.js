
//------BUTTONS---------

$('#work-btn').click(function () {
    $('#video').toggleClass('invisible');
    $('#about').addClass('invisible');
});

$('#about-btn').click(function (e) {
    e.preventDefault();
    $('#about').toggleClass('invisible');
    $('#video').addClass('invisible');
});

$('#contact-btn').click(function () {
    $('#about').addClass('invisible');
});



//-----------Play Videos-------------

var baseVideo = "https://player.vimeo.com/video/";

$('section').click(function () {
    console.log('click');
    var video = $(this).data('video');
    $('#video iframe').attr('src', baseVideo + video);
    $('#video').removeClass('invisible');
    $('#about').addClass('invisible');
});


$('.back').click(function () {
    $('#video').addClass('invisible');
    $('#video iframe').attr('src', "");
    $('#about').addClass('invisible');
});


