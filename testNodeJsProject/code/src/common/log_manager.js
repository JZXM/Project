/**
 * ---------------------------------------------------------------------------------------------------------------------
 * 文件描述：log4js 管理类
 * 开发者：kevin on 2016/12/3
 * 开发者备注：
 * 审阅者：
 * 优化建议：
 * ---------------------------------------------------------------------------------------------------------------------
 */
var cluster = require('cluster');
var log4js = require('log4js');
var fs = require('fs');

/* 创建logs文件夹 */
var logsDir = '../logs';
if(!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

/**
 * log4日志对象的配置
 */

log4js.configure({
    'appenders':[
        { type: 'console' }, //控制台输出
        {
            category: ['errors'],
            type: 'file',
            filename: '../logs/Error',
            maxLogSize: 1024 * 1024 * 10,
            'layout': {
                'type': 'pattern',
                'pattern': '[%r] [%x{pid}] [%p] [%c] %m',
                'tokens': {
                    'pid': function() {
                        return process.pid;
                    }
                }
            }
        },
        {
            'category': 'logic',
            'type': 'dateFile',
            'filename': '../logs/logic',
            'pattern': '-yyyy-MM-dd',
            'alwaysIncludePattern': true,
            'layout': {
                'type': 'pattern',
                'pattern': '[%r] [%x{pid}] [%p] [%c] %m',
                'tokens': {
                    'pid': function() {
                        return process.pid;
                    }
                }
            }
        },
        {
            'category': 'access',
            'type': 'dateFile',
            'filename': '../logs/access',
            'pattern': '-yyyy-MM-dd',
            'alwaysIncludePattern': true,
            'layout': {
                'type': 'pattern',
                'pattern': '[%r] [%x{pid}] [%p] [%c] %m',
                'tokens': {
                    'pid': function() {
                        return process.pid;
                    }
                }
            }
        }
    ],
    levels: {
        'error':'debug',
        'logic':'debug',
        'access':'debug'
    },
    replaceConsole: true
});

/** 错误日志*/
var error = log4js.getLogger('errors');
error.setLevel('Debug');

/** 逻辑日志*/
var logic = log4js.getLogger('logic');
logic.setLevel('Debug');

/** http访问日志*/
var access = log4js.getLogger('access');
access.setLevel('Info');


exports.errorlog = error;
exports.logiclog = logic;
exports.accesslog = access;

exports.use = function(app) {
    app.use(log4js.connectLogger(access, {level:'Debug'}));
};