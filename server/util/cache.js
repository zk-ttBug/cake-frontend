var lru = require('lrucache');
var cache = lru(100000);

/**
 * 获取缓存
 * @param key
 * @returns {*}
 */
var getCache = function (key) {
    var result = cache.get(key);
    return result
}

/**
 * 保存缓存
 * @param key
 * @param value
 * @returns {boolean}
 */
var setCache = function (key, value) {
    cache.set(key, value);
    return true;
}

/**
 * 移除缓存
 * @param key
 * @returns {boolean}
 */
var removeCacheByKey = function (key) {
    cache.remove(key);
    return true;
}

//
//var updateCache = function(){
//
//}

/**
 * 缓存对象
 * @type {{}}
 */
module.exports = {
    getCache: getCache,
    setCache: setCache,
    removeCacheByKey: removeCacheByKey
};