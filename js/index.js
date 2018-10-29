import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/scss/bootstrap-reboot.scss'
import 'aos/src/sass/aos.scss'
import 'fullpage.js/dist/fullpage.css'
import '../scss/styles.scss'


import 'bootstrap';

import $ from 'jquery';
import 'fullpage.js/vendors/scrolloverflow';
import FullPage from 'fullpage.js/dist/fullpage';

import md5 from 'md5';


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

    $('form').submit(() => {
        const key = {
            access_code: 'VIDL5nGwd2T4hVSOXsa3cCqxCZOfs7FT',
            terminal_id: '10',
            return_url: 'http://mphone.vn/thankyou.html',
            service_type: 'BP',
            currency_code: 'VND',
            amount: '5000000',
            bill_info: 'MPhone 32GB',
            bill_no: Date.now()
        }
        const stringForMD5 = [
            key.terminal_id,
            key.return_url,
            key.service_type,
            key.currency_code,
            key.amount,
            key.bill_no,
            key.bill_info,
            'PPPL5nGwd2T4hVSOXsa3cCqxCZOfs111'
        ].join("|");

        window.location = `http://118.70.157.239/payment_api/payment?${$.param(Object.assign({check_sum: md5(stringForMD5).toUpperCase()}, key))}`
        return false
    })
});

export default OM;