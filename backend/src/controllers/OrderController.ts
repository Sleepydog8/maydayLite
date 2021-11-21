import { Request, Response } from 'express'
import { EntityManager, getConnectionManager } from 'typeorm'
import { orderQueries } from '../queries/orderQueries'

const ctrl = {
  getProductInOrder: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const CitizenID = req.params.citizenID
    const product = await manager.query(
      orderQueries.getProductInOrder({ CitizenID })
    )
    res.json(product)
  },

  checkout: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const { body } = req
    const product = await manager.query(orderQueries.checkout(body))
    res.json(product)
  },
}

export default ctrl
