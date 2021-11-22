import { Router } from 'express'
import { Request, Response } from 'express'

import * as mongodb from 'mongodb'

const ctrl = {
  getAds: (req: Request, res: Response) => {
    mongodb.MongoClient.connect(process.env.MONGO_URL, (err, db) => {
      if (err) {
        console.log('cannot connect to database', err)
        throw err
      }
      db.db('mayday')
        .collection('ads')
        .find({ startDate: { $lte: new Date() }, endDate: { $gt: new Date() } })
        .toArray((err, result) => {
          if (err) {
            console.log('query error', err)
            throw err
          }
          res.send(result)
          db.close()
        })
    })
  },
}

const routes = Router()

routes.get('/', ctrl.getAds)

export default routes
