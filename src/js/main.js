//= slick.js

function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}

$(function () {

	$('.langswitch-btn').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		touchMove: false,
		arrows: false,
	}).click(function () {
		$('.langswitch').slideToggle('400');
	});

    var $sidebar = $('.sidebar');
    var $navbar = $('.navbar__links');
    var $navbarContainer = $('.navbar')
    var $burger = $('#burger');
    var $linkItem = $('.links__item');
    var $sidebarlayout = $('.sidebarlayout');


    $sidebar.click(function() {
        $navbar.toggleClass('--visible');
        $sidebar.toggleClass('--on');
        $burger.toggleClass('close').toggleClass('opened');
    });
    $navbarContainer.siblings().click(function() {
    $navbar.removeClass('--visible');
    $sidebar.removeClass('--on');
    $burger.addClass('close').removeClass('opened');
    });



    // pop-up

    var $whitePapper = $('#show-pop-up');
    var $whitePapperBtn = $('.wpbtn-footer');
    var $overlay = $('.cover');
    var $closeBtn = $('.close-button');
    var $popUpWhitepapper = $('.whitepapper');
    var $feedback = $('#show-feedback');
    var $popUpFeedback = $('.feedback-wrap');
    var $closeSpace = $('.space-close');
    var $qrWeChat = $('#qr-wechat');
    var $linkWeChat = $('#link-wechat');
    var $feedbackLinks = $('.feedback-ico');

    $qrWeChat.hide().click(function() {
    $qrWeChat.fadeToggle(600);
    $feedbackLinks.delay(600).fadeToggle(400);
    });
    $linkWeChat.click(function(e) {
    e.preventDefault();
    $qrWeChat.delay(400).fadeToggle(600);
    $feedbackLinks.fadeToggle(400);
    });


    $feedback.click(function(e) {
    e.preventDefault();
    $popUpFeedback.fadeToggle('400');
    $feedback.toggleClass('white');
    $closeSpace.toggle(400);
    });


    $closeSpace.click(function() {
    $popUpFeedback.fadeOut(400);
    $feedback.removeClass('white');
    $closeSpace.hide();
    });



    $whitePapper.click(function(event) {
    event.preventDefault();
    $overlay.fadeIn(400);
    $popUpWhitepapper.fadeIn(400);
    });

    $whitePapperBtn.click(function(event) {
    event.preventDefault();
    $overlay.fadeIn(400);
    $popUpWhitepapper.fadeIn(400);
    });


    $closeBtn.click(function() {
        $overlay.fadeOut(400);
        $popUpWhitepapper.fadeOut(400);
    });
    $overlay.click(function() {
        $overlay.fadeOut(400);
        $popUpWhitepapper.fadeOut(400);
    });

    function sortArticles(filter) {
        $('#filter_'+ filter).addClass('active').siblings().removeClass('active');
        $('.article__item').not('.' + filter).slideUp(400);
        setTimeout(function () {
            $('.' + filter).slideDown(400);
        }, 100);
    }
    $('#filter_medium').click(function() {
        sortArticles('medium');
    });
    $('#filter_all').click(function() {
        sortArticles('all');
    });
    $('#filter_publications').click(function() {
        sortArticles('publications');
    });
    $('#filter_presentations').click(function() {
        sortArticles('presentations');
    });
});