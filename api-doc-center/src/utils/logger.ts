import winston from 'winston'

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`
    }),
    winston.format.errors({ stack: true })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.File({
      filename: 'exceptions.log',
      handleExceptions: true
    })
  ]
})

export default {
  info: (req, res, next) => {
    logger.info(`${req.method} ${req.originalUrl}`)
    next()
  },
  error: (err, req, res, next) => {
    logger.error(err.message)
    res.status(500).send('Something broke!')
    next()
  }
}
