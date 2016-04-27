'use strict';

var tpl = __inline('index.tpl');
var header = require('widgets/header');
var footer = require('widgets/footer');

/**
 * 首页模块
 *
 * @class index
 * @constructor
 */
var index = Vue.extend({
    template: tpl,
    components:{
        "c-head":header(),
        "c-foot":footer()
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
    var indexDom = new index({
        el: "#page-main",
        replace: false
    });
    indexDom.$broadcast('navi-update', 'index');
    return indexDom;
}

module.exports = {
    init: init
}