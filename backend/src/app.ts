import * as express from 'express'
import { createConnection } from 'typeorm'
import Router from './routes'
import * as cors from 'cors'

createConnection().then(() => {
  const app = express()

  app.use(express.json())
  app.use('/', Router)
  app.use(cors())

  // start express server
  app.listen(3001)

  console.log('server start on 3001')
})
