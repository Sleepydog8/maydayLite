import * as express from 'express'
import { createConnection } from 'typeorm'
import Router from './routes'
import * as cors from 'cors'

createConnection().then(() => {
  const app = express()

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
