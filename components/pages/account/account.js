'use strict';

var tpl = __inline('account.tpl');
var header = require('widgets/header');
var footer = require('widgets/footer');

/**
 * 账号页面
 *
 * @class common
 * @constructor
 */
var account = Vue.extend({
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
    var accountDom = new account({
        el: "#page-main",
        replace: false
    });
    accountDom.$broadcast('navi-update', 'account');
    return accountDom;
}

module.exports = {
    init: init
}