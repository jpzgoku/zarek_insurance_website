$(document).ready(function() {

    var dropDownMenu = {
        showing: false
    };

    var $dropDownMenu = $('header').find('.dropdown-list').find('ul');

    $('header').find('.dropdown-menu').find('i').on('click', function() {
        dropDownMenu.showing = !dropDownMenu.showing;
        if (dropDownMenu.showing) {
            $dropDownMenu.css('display', 'block');
        } else {
            $dropDownMenu.css('display', 'none');
        }
    });

    // For Desktop.
    $('header').on('mouseleave', function() {
        dropDownMenu.showing = false;
        $dropDownMenu.css('display', 'none');
    });

    $dropDownMenu.find('li').on('click', function() {
        var url = $(this).find('a').attr('href')
        window.location.href = url;
    });
})
