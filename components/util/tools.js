'use strict';

/**
 * This is the description for my class.
 *
 * @class Tools  前端工具封装
 * @constructor
 */

/**
 * @method 获取location.hash 后面的参数
 * @return {Object} Returns 参数对象
 */
var getHashParams = function () {
    var hash = location.hash;
    var result = {};
    if (hash.indexOf('?') > -1) {
        var hashvalues = hash.split('?')[1];
        if (hashvalues && hashvalues !== '') {
            var paramsArr = hashvalues.split('&');
            if (paramsArr.length > 0) {
                result = handleParams(paramsArr);
            }
        }
    }
    return result;
}

var handleParams = function (paramsArr) {
    var result = {};
    for (var i = 0; i < paramsArr.length; i++) {
        var name = paramsArr[i].split("=")[0];
        var value = paramsArr[i].split("=")[1];
        result[name] = value;
    }
    return result;
}

var addDate = function(dd,dadd){
    var a = new Date(dd)
    a = a.valueOf()
    a = a + dadd * 24 * 60 * 60 * 1000
    a = new Date(a)
    return a;
}


module.exports = {
    getHashParams: getHashParams,
    addDate:addDate
}