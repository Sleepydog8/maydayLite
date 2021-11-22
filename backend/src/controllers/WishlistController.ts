import { Request, Response } from 'express'
import { EntityManager, getConnectionManager } from 'typeorm'
import { wishlistQueries } from '../queries/wishlistQueries'

const ctrl = {
  getProductInWishlist: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const CitizenID = req.params.citizenID
    const product = await manager.query(
      wishlistQueries.getProductInWishlist({ CitizenID })
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
    const ProductID = req.params.productID
    const CitizenID = req.params.citizenID
    const product = await manager.query(
      wishlistQueries.deleteWishlist({ ProductID, CitizenID })
    )
    res.json(product)
  },
}

export default ctrl
