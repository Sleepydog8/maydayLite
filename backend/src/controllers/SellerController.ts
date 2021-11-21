import { Request, Response } from 'express'
import { EntityManager, getConnectionManager } from 'typeorm'

const ctrl = {
  getSellers: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)

    const seller = await manager.query('SELECT * FROM Seller')
    res.json(seller)
  },
}

export default ctrl
