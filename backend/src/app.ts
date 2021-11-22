import * as express from 'express'
import { createConnection } from 'typeorm'
import Router from './routes'
import * as cors from 'cors'
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()

createConnection().then(() => {
  const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
  }

  app.use(cors(corsOptions))
  app.use(express.json())
  app.use('/', Router)

  // start express server
  app.listen(3001)

  console.log('server start on 3001')
})
