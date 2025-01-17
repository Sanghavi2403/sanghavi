const winston = require('winston');

const LOGGER = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { timestamp: new Date() },
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.File({
            filename: 'error.log',
            level: 'error',
        }),
        //new winston.transports.File({ filename: 'combined.log' }),
    ],
});


if (process.env.NODE_ENV !== 'production') {
    LOGGER.add(
        new winston.transports.Console({
            format: winston.format.json(),
        }),
    );
}

export default LOGGER;
