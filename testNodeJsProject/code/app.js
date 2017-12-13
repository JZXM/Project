var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/** 日志 */
var LogManager = require('./src/common/log_manager');

var index = require('./routes/index');

var app = express();

/** view engine */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**浏览器页面左上角的icon*/
app.use(favicon(path.join(__dirname, 'public/images', 'icon.png')));

/**日志模块*/
app.use(logger('dev'));
LogManager.use(app);

/** http body 处理 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**静态文件*/
app.use(express.static(path.join(__dirname, 'public')));
/** cookie处理 */
app.use(cookieParser());
/** session 处理*/
var session = require('express-session');
app.use(session({
    secret: '1234567890QWXXXERTY',
    cookie: {maxAge: 60 * 60 * 1000}, //过期时间（毫秒）
    resave: false,
    saveUninitialized: true
}));

/**以下为请求相应的模块*/
app.use('/', index);                    //主页

/**以下为错误处理*/
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    LogManager.errorlog.error(req.originalUrl);
    next(err);
});

app.use(function(err, req, res) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    LogManager.errorlog.error(err.stack);
});

module.exports = app;
