/**
 * ---------------------------------------------------------------------------------------------------------------------
 * 文件描述：
 * 开发者：likunlun on 2016/12/7
 * 开发者备注：
 * 审阅者：
 * 优化建议：
 * ---------------------------------------------------------------------------------------------------------------------
 */
var sqlManager = require("../common/mysql_manager").gameDb;
var log = require('../common/log_manager').logiclog;
var retCode = require('../common/ret_code');
/**
 * 根据代理账户名和密码获取用户信息,用以验证代理登入
 * @param userName [string] 登录名，代理名
 * @param password [string] 密码
 * @param callback [func] 返回错误码[int](retCode) 和用户信息
 */
// function getAccountInfoByNameAndPwd(userName,password, callback) {
//     sqlManager.getClient(function (err, client, end) {
//         client.query("CALL get_agent_info(?,?)",[userName,password],function (err, result) {
//             if (err) {
//                 log.error("getAccountInfoByNameAndPwd err: " + err);
//                 callback(err);
//             } else {
//                 if(result[0][0] == null || result[0][0] == undefined){
//                     callback(null,0);
//                 }else {
//                     callback(null,result[0][0]);
//                 }
//             }
//             end();
//         });
//     })
// }
// exports.getAccountInfoByNameAndPwd = getAccountInfoByNameAndPwd;
