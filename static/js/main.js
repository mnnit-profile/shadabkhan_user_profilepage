/**
 * Created by Deagle on 17-Dec-16.
 */
$(document).ready(function() {
    // Handler for dropdown menu for top navigation bar...
    $(".navbar_custom").children('.dpdown-menu').click(function() {
        $(this).siblings('ul.navlist_custom').slideToggle(500);
    });

    // Handler for menu drop donw...
    var showing_menu = 0;
    $('.has-menu').click(function() {
        if (showing_menu == 0) {
            $(this).children('.menu').stop(true, false);
            $(this).children('.menu').slideDown('fast');
            showing_menu = 1;
        } else {
            $(this).children('.menu').stop(true, false);
            $(this).children('.menu').slideUp(300);
            showing_menu = 0;
        }
    });
    // Handler for animation of left dashboard menu...
    // Variable to save the state of the left dashboard menu...
    var left_menu_show_state = 0;
    $('#show_left_menu_1,#show_left_menu_2').click(function() {
        if (left_menu_show_state == 0) {
            $('#left_menu_veil').fadeIn('fast', function() {
                $('#show_left_menu_1,#show_left_menu_2').children('span').removeClass('glyphicon-arrow-right');
                $('#show_left_menu_1,#show_left_menu_2').children('span').addClass('glyphicon-arrow-left');
                $('.vertical-tabs').animate({
                    'left': '0px'
                }, 'fast');
            });
            left_menu_show_state = 1;
        } else {
            $('.vertical-tabs').animate({
                'left': '-80vw'
            }, 'fast', function() {
                $('#left_menu_veil').fadeOut('fast');
                $('#show_left_menu_1,#show_left_menu_2').children('span').removeClass('glyphicon-arrow-left');
                $('#show_left_menu_1,#show_left_menu_2').children('span').addClass('glyphicon-arrow-right');
                left_menu_show_state = 0;
            });
        }
    });
    $('#left_menu_veil').click(function() {
        if (left_menu_show_state == 1) {
            $('.vertical-tabs').animate({
                'left': '-80vw'
            }, 'fast', function() {
                $('#left_menu_veil').fadeOut('fast');
                $('#show_left_menu_1,#show_left_menu_2').children('span').removeClass('glyphicon-arrow-left');
                $('#show_left_menu_1,#show_left_menu_2').children('span').addClass('glyphicon-arrow-right');
                left_menu_show_state = 0;
            });
        }
    });

    // Handler for fixing dashboard menu drag in buttons on top while scrolling...
    // Variable to store initial offset...
    var nav_bar_top = $('.navbar_custom').offset(),
        logo_height = $('.logo-img').outerHeight(),
        logo_top = $('.logo-img').offset()
    try {
        vertical_tabs_top = $('.vertical-tabs').offset();
        vertical_tabs_top = vertical_tabs_top.top;
    } catch (err) {
        console.log("%c Info! Vertical Tabs not showing.", 'color:orange');
    }


    nav_bar_top = nav_bar_top.top;
    logo_top = logo_top.top;
    logo_height = logo_height + logo_top - nav_bar_top;

    nav_full_width = 0;
    $(document).scroll(function() {
        var doc_top = $(this).scrollTop();
        if (doc_top >= nav_bar_top && nav_full_width == 0) {
            $('.navbar_custom').addClass('fix_top');
            nav_full_width = 1;
        } else if (doc_top < nav_bar_top && nav_full_width == 1) {
            $('.navbar_custom').removeClass('fix_top');
            nav_full_width = 0;
        }

        if (window.screen.availWidth > 650) {
            if (doc_top >= nav_bar_top + logo_height) {
                $('.navbar_custom').stop(true, false);
                $('.navbar_custom').animate({
                    'width': '150vw'
                }, 50);
            } else {
                $('.navbar_custom').stop(true, false);
                $('.navbar_custom').animate({
                    'width': '85vw'
                }, 50);
            }
        }
        if (doc_top >= vertical_tabs_top) {
            $('.vertical-tabs').addClass('vertical_tabs_fix');
        } else {
            $('.vertical-tabs').removeClass('vertical_tabs_fix');
        }
    });
});