var log4js = require('log4js');

log4js.configure({
    appenders: {
        cheese: {
            type: 'dateFile',
            filename: './logs/error.log'
        }
    },
    categories: {
        default: {
            appenders: ['cheese'],
            level: 'error'
        }
    }
})
var logger = log4js.getLogger('cheese')
exports.logger = logger