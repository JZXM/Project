/**
 * ---------------------------------------------------------------------------------------------------------------------
 * 文件描述：Mysql 连接池，使用了 mysql库 和 generic-pool 连接池
 * 开发者：kevin on 2016/12/3
 * 开发者备注：
 * 审阅者：
 * 优化建议：
 * ---------------------------------------------------------------------------------------------------------------------
 */
var mysql = require('mysql');
var poolModule = require('generic-pool');
var retCode = require('./ret_code');


var MysqlManager = (function() {

    /**
     * 构造函数
     */
    function MysqlManager() {
        this._Client_Pool = null;
    }

    /**
     * create a mysql connection pool with cfg
     * @param cfg [obj] mysql数据库配置
     * @param cb
     * @returns []
     */
    MysqlManager.prototype.loadDB = function(cfg,cb) {
        var self = this;
        self._Client_Pool = new poolModule.Pool({
            name     : 'mysql',
            //将建 一个 连接的 handler
            create   : function(callback) {
                self.c = mysql.createConnection(cfg);
                if(self.c != null && self.c != undefined){
                    //查询一次看看是否ok
                    self.c.query("select now();", [], function(err) {
                        if(err){
                            cb(err);
                        }
                        else{
                            callback(null, self.c);
                        }
                    });
                }
                else{
                    cb(retCode.DB_ERR);
                }
            },
            // 释放一个连接的 handler
            destroy  : function(client) { client.end(); },
            // 连接池中最大连接数量
            max      : cfg.max,
            // 连接池中最少连接数量
            min      : cfg.min,
            // 如果一个线程30秒钟内没有被使用过的话。那么就释放
            idleTimeoutMillis : 30000,
            // 如果 设置为 true 的话，就是使用 console.log 打印日志，当然你可以传递一个 function 最为作为日志记录handler
            log : false
        });
        cb(null);
    };

    /**
     * acquire connection
     * @param callback [func] 回调函数
     */
    MysqlManager.prototype.getClient = function(callback) {
        var self = this;
        self._Client_Pool.acquire(function(err, client){
            callback(err, client, function(){self._Client_Pool.release(client);});
        });
    };

    /**
     * 返回单例函数
     */
    return MysqlManager;
})();

/**
 * 声明全局对象
 */
exports.gameDb = new MysqlManager();
