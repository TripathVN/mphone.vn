'use strict';

import 'bootstrap';

import FullPage from 'fullpage.js';

import './../node_modules/fullpage.js/vendors/scrolloverflow.js';

import AOS from 'aos';

const OM = {};

OM.aos = function() {
    AOS.init();
    $('[data-aos]').each(function(){ $(this).addClass("aos-init"); });
};

OM.fullpage = function () {
    new FullPage('#fullpage', {
        scrollOverflowOptions: {disablePointer: true},
        dragAndMove: false,
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        scrollBar: true,
        onLeave: function(){
            $('.section [data-aos]').each(function(){
                $(this).removeClass("aos-animate")
            });
        },
        onSlideLeave: function(){
            $('.slide [data-aos]').each(function(){
                $(this).removeClass("aos-animate")
            });
        },
        afterSlideLoad: function(){
            $('.slide.active [data-aos]').each(function(){
                $(this).addClass("aos-animate")
            });
        },
        afterLoad: function(){
            $('.section.active [data-aos]').each(function(){
                $(this).addClass("aos-animate")
            });
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