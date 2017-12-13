/**
 * ---------------------------------------------------------------------------------------------------------------------
 * 文件描述：
 * 开发者：Administrator on 2017/2/8
 * 开发者备注：
 * 审阅者：
 * 优化建议：
 * ---------------------------------------------------------------------------------------------------------------------
 */



Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

exports.isEmpty = function(value) {
    return (typeof value == "undefined" || value == null || value == "");
};

/**
 * 格式化日期
 *
 * @param time
 * @returns {string}
 */
exports.formatDate = function(time) {
    var date = new Date(time);
    var year = date.getFullYear() + '-';
    var month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var day = (date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate()) + ' ';
    return (year + month + day);
};

/*
 * 计算预警间隔天数
 * @param startTime
 * @param endTime
 * @returns {string}
 * */
exports.getIntervalDays = function(startTime,endTime){
    var startTimeStamp = new Date(startTime).getTime();
    var endTimeStamp = new Date(endTime).getTime();
    var day = 24 * 60 * 60 * 1000;
    var IntervalDays = (endTimeStamp - startTimeStamp) / day;
    return IntervalDays;
};

/*格式化日期函数*/
function formatterTime(selectTime){
    selectFormatter = new Date(selectTime);
    var year = selectFormatter.getFullYear();
    var month= selectFormatter.getMonth()+1 > 9 ? selectFormatter.getMonth()+1 : "0"+(selectFormatter.getMonth()+1);
    var day = selectFormatter.getDate() > 9 ? selectFormatter.getDate() : "0"+selectFormatter.getDate();
    return formartterTimeReturn = year+"-"+month+"-"+day;
};
exports.formatterTime = formatterTime;
/*由当天获取以前时间*/
function formatterBeforeDate(selectTime,number){
    var select = selectTime.split("-");
    var newSecond = new Date(select[0],select[1]-1,select[2]);
    var newDate = newSecond.getTime() - 60 * 60 * 24 * number * 1000;
    return formatterTime(newDate);
};
exports.formatterBeforeDate = formatterBeforeDate;

function unique2(){
    this.sort();
    var res = [this[0]];
    for(var i = 1;i<this.length;i++){
        if(this[i] !== res[res.length-1]){
            res.push(this[i]);
        }
    };
    return res;
};
exports.unique2 = unique2;