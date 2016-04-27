'use strict';

var tpl = __inline('index.tpl');
/**
 * 首页模块
 *
 * @class index
 * @constructor
 */
var index = Vue.extend({
    template: tpl,
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
    return new index({
        el: "#page-main",
        replace: false
    })
}

module.exports = {
    init: init
}