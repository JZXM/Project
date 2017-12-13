/**
 * ---------------------------------------------------------------------------------------------------------------------
 * 文件描述：统一错误码，所有的错误码均在此定义
 * 开发者：kevin on 2016/12/3
 * 开发者备注：
 * 审阅者：
 * 优化建议：
 * ---------------------------------------------------------------------------------------------------------------------
 */


/** 数据库相关错误 1~100 */

exports.DB_ERR  =  1;
exports.DATA_NOT_EXIST = 2;                 /* 数据不存在 */
exports.SUPERIOR_AGENT_ALREADY_EXIST = 3;   /* 上级代理已存在 */
exports.WECHAT_ERR = 4;                     /* 微信号错误 */
exports.USERID_ERR = 5;                     /* 玩家ID错误 */
exports.AGENT_NAME_ALREADY_EXIST = 6;       /* 账户名已存在 */
exports.WECHAT_ALREADY_EXIST = 7;           /* 微信号已存在 */
exports.PHONE_ALREADY_EXIST = 8;            /* 手机号已存在 */
exports.CARD_NOT_ENOUGH = 10;               /* 房卡数量不够 */
exports.NICKNAME_NOT_RIGHT = 11;            /* 微信号错误 */
exports.PRIVILEGE_NOT_RIGHT = 12;           /* 权限错误 */
exports.CODE_NOT_RIGHT = 13;
exports.PASSWORD_NOT_RIGHT = 14;            /* 密码错误 */
exports.PRIVILEGE_CLOSE = 15;               /* 账号被封 */
exports.ACCOUNT_INFO_IS_NULL = 16;          /* 账号信息为空 */


/** 支付宝相关错误 */
exports.SUCCESS = "1000";/*成功*/
exports.ERR = "1001";/*未知错误*/
exports.APPID_FORMAT_ERR = "1002";/*appId格式不符合条件*/
exports.ACCOUNTID_FORMAT_ERR = "1003";/*accountId格式不符合条件*/
exports.GAMEORDERID_FORMAT_ERR = "1004";/*gameOrderId格式不符合条件*/
exports.AMOUNT_FORMAT_ERR = "1005";/*amount格式不符合条件*/
exports.ITEMDETAIL_FORMAT_ERR = "1006";/*itemDetail格式不符合条件*/
exports.ITEMID_FORMAT_ERR = "1029";/*itemId格式不符合条件*/
exports.ITEMNUM_FORMAT_ERR = "1008";/*itemNum格式不符合条件*/
exports.ITEMNAME_FORMAT_ERR = "1009";/*itemName格式不符合条件*/
exports.ITEMPRICE_FORMAT_ERR = "1010";/*itemPrice格式不符合条件*/
exports.CHANNELORDERID_FORMAT_ERR = "1011";/*channelOrderId格式不符合条件*/
exports.PAYORDERID_FORMAT_ERR = "1012";/*payOrderId格式不符合条件*/
exports.ORDERSTATUS_FORMAT_ERR ="1013";/*orderStatus格式不符合条件*/
exports.STARTTIME_FORMAT_ERR  = "1016";/*startTime格式不符合条件*/
exports.ENDTIME_FORMAT_ERR = "1017";/*endTime格式不符合条件*/
exports.SELLERID_FORMAT_ERR = "1020";/*sellerId格式不符合条件*/
exports.SELLERACCOUNT_FORMAT_ERR = "1021";/*sellerAccount格式不符合条件*/
exports.BUYERID_FORMAT_ERR = "1022";/*buyerId格式不符合条件*/
exports.BUYERACCOUNT_FORMAT_ERR = "1023";/*buyerAccount格式不符合条件*/
exports.TRADECREATETIME_FORMAT_ERR = "1024";/*tradeCreateTime格式不符合条件*/
exports.PAYFINISHTIME_FORMAT_ERR = "1025";/*payFinishTime格式不符合条件*/
exports.SIGN_FORMAT_ERR = "1026";/*sign格式不符合条件*/
exports.REQTIME_FORMAT_ERR = "1029";/*reqTime参数格式不正确*/
exports.SDK_NOTIFY_ERR = "1030";/*SDK服务器通知失败*/
exports.SIGN_ERR = "1031";/*签名不正确*/
exports.REPEAT_SUC_ORDER = "1032";/*成功的订单不能重复处理*/



exports.USERID_FORMAT_ERR = "1100";/*游戏ID参数格式不正确*/

