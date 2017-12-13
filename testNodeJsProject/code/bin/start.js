/**
 * ---------------------------------------------------------------------------------------------------------------------
 * 文件描述：程序启动文件
 * 开发者：kevin on 2016/12/3
 * 开发者备注：
 * 审阅者：
 * 优化建议：
 * ---------------------------------------------------------------------------------------------------------------------
 */

var async = require('async');
var LogManager = require("../src/common/log_manager");
var ErrorLog = LogManager.errorlog;
var LogicLog = LogManager.logiclog;
var MysqlGame = require("../src/common/mysql_manager").gameDb;
var cfg = require('../../config/config');
var globalManager = require('../src/common/global_manager').Instance();
var agentDb = require('../src/database/game');

/* 错误处理 */
process.on('uncaughtException', function (err) {
    ErrorLog.error("[uncaughtException] " + err.stack);
});

/* 入口函数 */
function main() {
    /** 异步工作流*/
    async.waterfall([

        /* 初始化Mysql-gameDb数据库 */
        function(callback) {
            MysqlGame.loadDB(cfg.MYSQL_GAME_CONF,callback);
        },
        /* 启动HttpServer */
        function (callback) {
            require('./www').startHttpServer(cfg.PORT);
            callback(null);
        }
    ], function(err) {
        if (err) {
            ErrorLog.error("Server Start Error:" + JSON.stringify(err));
            process.exit(99999);/*启动过程报错应该退出*/
        }else{
            LogicLog.info("-----------------项目启动 端口号："+cfg.PORT+" -----------------");
        }
    });
}

/** 启动 */
main();
