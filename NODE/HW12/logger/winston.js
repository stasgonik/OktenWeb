const path = require('path');
const winston = require('winston');

module.exports = () => {
    const fileOption = {
        level: 'error',
        filename: path.join(process.cwd(), 'logDir', 'errorLog.txt'),
        format: winston.format.combine(
            winston.format.json({ space: 2 })
        )
    };

    const consoleOption = {
        level: 'info',
        format: winston.format.combine(
            winston.format.colorize({
                colors: {
                    info: 'yellow',
                    warn: 'blue',
                    error: 'red'
                },
                all: true
            })
        )
    };

    const logger = winston.createLogger({
        format: winston.format.combine(
            winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }),
            winston.format.simple(),
        ),
        transports: [
            new winston.transports.Console(consoleOption),
            new winston.transports.File(fileOption)
        ]
    });

    return {
        info: (message) => logger.info(message),
        warn: (message) => logger.warn(message),
        error: (message) => logger.error(message),
    };
};
