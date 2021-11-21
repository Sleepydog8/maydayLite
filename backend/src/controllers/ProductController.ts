import { Request, Response } from 'express'
import { EntityManager, getConnectionManager } from 'typeorm'
import { productQueries } from '../queries/productQueries'

const ctrl = {
  getProduct: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const Category = req.params.category
    const product = await manager.query(
      productQueries.getProducts({ Category })
    )
    res.json(product)
  },

  getProductInStock: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const CitizenID = req.params.citizenID
    const product = await manager.query(
      productQueries.getProductInStock({ CitizenID })
    )
    res.json(product)
  },

  deleteProduct: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const { body } = req
    const product = await manager.query(productQueries.deleteProduct(body))
    res.json(product)
  },

  stockProduct: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const { body } = req
    const product = await manager.query(productQueries.stockProduct(body))
    res.json(product)
  },
}

export default ctrl
