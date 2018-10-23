import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/scss/bootstrap-reboot.scss'
import 'aos/src/sass/aos.scss'
import 'fullpage.js/dist/fullpage.css'
import '../scss/styles.scss'


import 'bootstrap';

import $ from 'jquery';
import 'fullpage.js/vendors/scrolloverflow';
import FullPage from 'fullpage.js/dist/fullpage';


import AOS from 'aos';

const OM = {};

OM.aos = function () {
    AOS.init({
        disable: 'mobile',
        once: true,
    });
    if ($(window).width() > 1200) {
        $('[data-aos]').each(function () {
            $(this).addClass("aos-init");
        });
    }
};

OM.fullpage = function () {
    new FullPage('#fullpage', {
        scrollOverflow: false,
        scrollOverflowOptions: {disablePointer: true},
        lazyLoading: true,
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        scrollBar: true,
        responsiveWidth: 1200,
        responsiveSlides: true,
        onLeave: function () {
            if ($(window).width() > 1200) {
                $('.section [data-aos]').each(function () {
                    $(this).removeClass("aos-animate")
                });
            }
        },
        onSlideLeave: function () {
            if ($(window).width() > 1200) {
                $('.slide [data-aos]').each(function () {
                    $(this).removeClass("aos-animate")
                });
            }
        },
        afterSlideLoad: function () {
            if ($(window).width() > 1200) {
                $('.slide.active [data-aos]').each(function () {
                    $(this).addClass("aos-animate")
                });
            }
        },
        afterLoad: function () {
            if ($(window).width() > 1200) {
                $('.section.active [data-aos]').each(function () {
                    $(this).addClass("aos-animate")
                });
            }
        }
    });
};

$(document).ready(function () {

    /**
     * FullPage
     */

    OM.fullpage();

    /**
     * AOS
     */
    OM.aos();
});

export default OM;