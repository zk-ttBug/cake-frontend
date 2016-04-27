'use strict';

var tpl = __inline('shopping.tpl');
var header = require('widgets/header');
var footer = require('widgets/footer');

/**
 * 购物页面
 *
 * @class shopping
 * @constructor
 */
var shopping = Vue.extend({
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
    var shoppingDom = new shopping({
        el: "#page-main",
        replace: false
    });
    shoppingDom.$broadcast('navi-update', 'shopping');
    return shoppingDom;
}

module.exports = {
    init: init
}