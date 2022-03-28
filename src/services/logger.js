const pino = require('pino');

const loggerService = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    }
})

const logger = {
    info(msg) {
        loggerService.info(msg)
    },

    error(msg) {
        loggerService.error(msg)
    }
}

module.exports = logger;