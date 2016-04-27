'use strict';

/**
 * 头部组件
 *
 * @class footer
 * @constructor
 */

var tpl = __inline('footer.tpl');

var footer = Vue.extend({
    template: tpl,
    props: ['page'],
    ready: function () {
    },
    methods: {
    },
    replace: false
});


/**
 * My method description.  Like other pieces of your comment blocks,
 * this can span multiple lines.
 *
 * @method init
 * @return {Object} Returns head component
 */
var init = function () {
    return footer;
}

module.exports = init;