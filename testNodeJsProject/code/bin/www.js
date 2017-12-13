//#!/usr/bin/env node


/**
 * ---------------------------------------------------------------------------------------------------------------------
 * 文件描述：Http服务文件，在Express框架的www文件上做了简单的修改
 * 开发者：kevin on 2016/12/4
 * 开发者备注：注意www.js文件目前只能被引用一次
 * 审阅者：
 * 优化建议：
 * ---------------------------------------------------------------------------------------------------------------------
 */


/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('code:server');
var http = require('http');


/**全局变量，目前只支持监听一个端口*/
var server;

var startHttpServer = function(port)
{
    app.set('port', port);
    server = http.createServer(app);
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);
};

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

exports.startHttpServer = startHttpServer;