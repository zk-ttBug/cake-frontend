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
    data:function(){
        return{
            index:{
                act:''
            },
            common:{
                act:''
            },
            shopping:{
                act:''
            },
            account:{
                act:''
            }
        }
    },
    props: ['page'],
    ready: function () {
       // this["shopping"].act = 'active';
    },
    events: {
        'navi-update': function (page) {
            this[page].act = 'active';
            //console.log(page + '-' + router);
            //this.nconfig = this.activeMenu(page, router);
            //console.log(this.nconfig);
            //Vue.nextTick(materialize)
        }
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