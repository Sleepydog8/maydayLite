import { Request, Response } from 'express'
import { EntityManager, getConnectionManager } from 'typeorm'
import { wishlistQueries } from '../queries/wishlistQueries'

const ctrl = {
  getProductInWishlist: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const { body } = req
    const product = await manager.query(
      wishlistQueries.getProductInWishlist(body)
    )
    res.json(product)
  },

  addToWishlist: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const { body } = req
    const product = await manager.query(wishlistQueries.addToWishlist(body))
    res.json(product)
  },

  deleteWishlist: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const { body } = req
    const product = await manager.query(wishlistQueries.deleteWishlist(body))
    res.json(product)
  },
}

export default ctrl
