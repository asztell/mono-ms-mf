import express, { type Express } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import { routes } from './routes/index.ts'
import logger from './utils/logger.ts'

const app: Express = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use([logger.info, logger.error])

routes(app)

dotenv.config()

const port = process.env.SERVER_PORT
app.listen(port, () => {
  console.log('Server is running at http://localhost:%s', port, '\n')
})
console.log('Hello, world!')
