/**
 * Created by 刘曌 on 2017/4/18.
 */

/**
 * 设置cookie
 * @param name
 * @param value
 * @param expiresHours 过期时间，单位：小时
 */
function addCookie(name, value, expiresHours) {
    var cookieString = name + "=" + escape(value);
//判断是否设置过期时间
    if (expiresHours > 0) {
        var date = new Date();
        date.setTime(date.getTime + expiresHours * 3600 * 1000);
        cookieString = cookieString + "; expires=" + date.toGMTString();
    }
    document.cookie = cookieString;
}

/**
 * 获取cookie的值
 * @param name
 * @returns {*}
 */
function getCookie(name) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (arr[0] == name)return arr[1];
    }
    return "";
}

/**
 * 删除cookie
 * @param name
 */
function deleteCookie(name) {
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie = name + "=v; expires=" + date.toGMTString();
}