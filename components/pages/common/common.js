'use strict';

var tpl = __inline('common.tpl');
var header = require('widgets/header');
var footer = require('widgets/footer');

/**
 * 圈子页面
 *
 * @class common
 * @constructor
 */
var common = Vue.extend({
    template: tpl,
    components: {
        "c-head": header(),
        "c-foot": footer()
    },
    ready: function () {
    }
});


/**
 * My method description.  Like other pieces of your comment blocks,
 * this can span multiple lines.
 *
 * @method init
 * @return {Object} Returns index page component
 */
var init = function () {
    var commonDom = new common({
        el: "#page-main",
        replace: false
    });
    commonDom.$broadcast('navi-update', 'common');
    return commonDom;
}

module.exports = {
    init: init
}