import { Router } from 'express'
import { Request, Response } from 'express'

import * as mongodb from 'mongodb'

import * as mongoose from 'mongoose'
const ObjectId = mongoose.Types.ObjectId

const ctrl = {
  getAds: (req: Request, res: Response) => {
    const adsBuyerID = req.params.adsBuyerID
    mongodb.MongoClient.connect(process.env.MONGO_URL, (err, db) => {
      if (err) {
        console.log('cannot connect to database', err)
        throw err
      }
      db.db('mayday')
        .collection('ads')
        .find({ adsBuyerID: new ObjectId(adsBuyerID) })
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

routes.get('/:adsBuyerID', ctrl.getAds)

export default routes
