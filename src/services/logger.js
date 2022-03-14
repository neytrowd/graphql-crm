const pino = require('pino');

const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    }
})

const Logger = {
    info(msg) {
        logger.info(msg)
    },

    error(msg) {
        logger.error(msg)
    }
}

module.exports = Logger;