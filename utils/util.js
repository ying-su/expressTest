const mysql = require('mysql')
const dbConfig = require('../config/database')
const log = require('../config/log').logger
var connection


/**
 * 连接数据库
 * @return {[type]} [description]
 */
exports.handleConnection = function() {
    connection = mysql.createConnection(dbConfig.connection)
    connection.connect(function(err) {
        if (err) {
            log.error(err)
            exports.reConnection(err)
        }
    })
    return connection
}


/**
 * 重连据库
 * @param  {[type]} err [description]
 * @return {[type]}     [description]
 */
exports.reConnection = function(err) {
    log.error(err)
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        exports.handleConnection()
    } else if (err.code === 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR') {
        exports.handleConnection()
    } else {
        throw err
    }
}