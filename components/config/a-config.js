'use strict';

/**
 * api config
 * @type {{}}
 */


var host = '';

// 请求类型
var ajaxType = {
    get: 'GET',
    post: 'POST'
}

// 请求路径
var path = {
    //'orderlist': '/api/orderlist', //获取订单数据
    //'weekorders': '/api/getdatelog', //获取时间日志
    //'systime': '/api/systemTime', //获取系统时间
    //'login': '/api/login', //登录接口
    //'logout':'/api/logout' //登出接口
}


// 返回码配置
var code = {
    common: {
        succ: 200,
        miss: 1001
    }
}

module.exports = {
    ajaxType: ajaxType,
    path: path,
    code: code
}