'use strict';

/**
 * 头部组件
 *
 * @class head
 * @constructor
 */

var tpl = __inline('header.tpl');

var head = Vue.extend({
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
    return head;
}

module.exports = init;