$(document).ready(function () {
    
    /*for the sticky navigation*/
    $('.js--section_features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    })
    
    /*scroll on buttons*/
    $('.js--scroll_to_plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section_plans').offset().top},1000);
    });
    
    $('.js--scroll_to_start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section_features').offset().top},1000);
    });
    
    /*navigation scroll*/ /*it makes the scroll-transition immediate*/
        
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
                if (target.length) {
            // Only prevent default if animation is actually gonna happen
                    $('html, body').animate({
                    scrollTop: target.offset().top
                    }, 1000);
                return false;
                }   
            }
        });
    });
    
    /*animations on scroll*/
    
    $('.js--wp_1').waypoint(function(direction) {
        $('.js--wp_1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp_2').waypoint(function(direction) {
        $('.js--wp_2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp_3').waypoint(function(direction) {
        $('.js--wp_3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp_4').waypoint(function(direction) {
        $('.js--wp_4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    /*mobile navigation*/
    $('.js--nav_icon').click(function() {
        var nav = $('.js--main_nav');
        var icon = $('.js--nav_icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
    
        
})
