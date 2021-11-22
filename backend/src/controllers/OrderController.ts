import { Request, Response } from 'express'
import { EntityManager, getConnectionManager } from 'typeorm'
import { orderQueries } from '../queries/orderQueries'

const ctrl = {
  checkout: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const { CitizenID } = req.body
    const {updateOrder, deleteInCart} = orderQueries.checkout()
    const product = await manager.query(updateOrder({CitizenID}))
    await manager.query(deleteInCart({CitizenID}))
    res.json(product)
  },
}

export default ctrl
