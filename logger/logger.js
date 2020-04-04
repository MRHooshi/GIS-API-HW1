const winston = require('winston');

const logger = winston.createLogger({
        format: winston.format.combine(
            winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }),
            winston.format.simple(),
            winston.format.errors({stack:true}),
            winston.format.json(),
        ),
        transports: [
            new winston.transports.File({filename: 'error.log', level: 'error'}),
            new winston.transports.File({filename: 'combined.log'})
        ],
    });
    
module.exports = logger