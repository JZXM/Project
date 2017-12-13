/**
 * ---------------------------------------------------------------------------------------------------------------------
 * 文件描述：
 * 开发者：Administrator on 2017/2/8
 * 开发者备注：
 * 审阅者：
 * 优化建议：
 * ---------------------------------------------------------------------------------------------------------------------
 */
var retCode = require("./ret_code");
var log = require("./log_manager").logiclog;


/**
 * 支付宝参数校验函数
 * @param arr {} 传参对象
 * @returns {number}
 */
exports.paramVerify = function(arr){
    if(arr === null || arr === undefined){
        log.info("arr参数不正确");
        return retCode.ERR;
    }
    for(var i in arr){
        switch (i) {
            case 'accountId':
            {
                if (arr[i] === undefined || arr[i] === null || isNaN(arr[i]) || parseInt(arr[i]) <= 0) {
                    log.info("accountId参数不正确");
                    return retCode.ACCOUNTID_FORMAT_ERR;
                }

                break;
            }
            case 'gameOrderId':
            {
                if (arr[i] === null || arr[i] === undefined || arr[i].length < 1 || arr[i].length > 20) {
                    log.info("gameOrderId参数不正确");
                    return retCode.GAMEORDERID_FORMAT_ERR;
                }
                break;
            }
            case 'amount':
            {
                if (arr[i] === null || arr[i] === undefined || parseFloat(arr[i]) <= 0) {
                    log.info("amount参数不正确");
                    return retCode.AMOUNT_FORMAT_ERR;
                }
                break;
            }
            case 'itemDetail':
            {

                if (arr[i] === null || arr[i] === undefined || arr[i].length < 1 || arr[i].length > 255) {
                    log.info("itemDetail参数不正确");
                    return retCode.ITEMDETAIL_FORMAT_ERR;
                }
                break;
            }
            case 'itemNum':
            {
                if (arr[i] === null || arr[i] === undefined || isNaN(arr[i]) || parseInt(arr[i]) <= 0) {
                    log.info("itemNum参数不正确");
                    return retCode.ITEMNUM_FORMAT_ERR;
                }
                break;

            }
            case 'itemName':
            {
                if (arr[i] === null || arr[i] === undefined || arr[i].length < 1 || arr[i].length > 128) {
                    log.info("itemName参数不正确");
                    return retCode.ITEMNAME_FORMAT_ERR;
                }
                break;

            }
            case 'itemPrice':
            {
                if (arr[i] === null || arr[i] === undefined ||  parseFloat(arr[i]) <= 0 || arr[i].length < 1 || arr[i].length > 20) {
                    log.info("itemPrice参数不正确");
                    return retCode.ITEMPRICE_FORMAT_ERR;
                }
                break;

            }
            case 'channelOrderId':
            {
                if (arr[i] === undefined || arr[i] === null || arr[i].length < 1 || arr[i].length > 20) {
                    log.info("channelOrderId参数不正确");
                    return retCode.CHANNELORDERID_FORMAT_ERR;
                }
                break;
            }
            case 'payOrderId':
            {
                if (arr[i] === null || arr[i] === undefined || arr[i] === "" || arr[i].length < 1 || arr[i].length > 40) {
                    log.info("payOrderId参数不正确");
                    return retCode.PAYORDERID_FORMAT_ERR;
                }
                break;
            }
            case 'orderStatus':
            {
                if (arr[i] === null || arr[i] === undefined || isNaN(arr[i])) {
                    log.info("orderStatus参数不正确");
                    return retCode.ORDERSTATUS_FORMAT_ERR;
                }
                break;
            }
            case 'startTime':
            {
                if (new Date(arr[i]) === undefined || new Date(arr[i]) === null) {
                    log.info("startTime参数不正确");
                    return retCode.STARTTIME_FORMAT_ERR;
                }
                break;

            }
            case 'endTime':
            {
                if (new Date(arr[i]) === undefined || new Date(arr[i]) === null) {
                    log.info("endTime参数不正确");
                    return retCode.ENDTIME_FORMAT_ERR;
                }
                break;

            }
            case 'sellerId':
            {
                if (arr[i] === null || arr[i] === undefined || arr[i] === "" || arr[i].length < 1 || arr[i].length > 20) {
                    log.info("sellerId参数不正确");
                    return retCode.SELLERID_FORMAT_ERR;
                }
                break;

            }
            case 'sellerAccount':
            {
                if (arr[i] === null || arr[i] === undefined || arr[i] === "" || arr[i].length < 1 || arr[i].length > 50) {
                    log.info("sellerAccount参数不正确");
                    return retCode.SELLERACCOUNT_FORMAT_ERR;
                }
                break;
            }
            case 'buyerId':
            {
                if (arr[i] === null || arr[i] === undefined || arr[i] === "" || arr[i].length < 1 || arr[i].length > 20) {
                    log.info("buyerId参数不正确");
                    return retCode.BUYERID_FORMAT_ERR;
                }
                break;
            }
            case 'buyerAccount':
            {
                if (arr[i] === null || arr[i] === undefined || arr[i] === "" || arr[i].length < 1 || arr[i].length > 50) {
                    log.info("buyerAccount参数不正确");
                    return retCode.BUYERACCOUNT_FORMAT_ERR;
                }
                break;
            }
            case 'tradeCreateTime':
            {
                if (new Date(arr[i]) === undefined || new Date(arr[i]) === null) {
                    log.info("tradeCreateTime参数不正确");
                    return retCode.TRADECREATETIME_FORMAT_ERR;
                }
                break;
            }
            case 'payFinishTime':
            {

                if (new Date(arr[i]) === undefined || new Date(arr[i]) === null) {
                    log.info("payFinishTime参数不正确");
                    return retCode.PAYFINISHTIME_FORMAT_ERR;
                }
                break;
            }
            default :
            {
                break;
            }
        }
    }
    return retCode.SUCCESS;

};
