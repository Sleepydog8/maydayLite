import { Request, Response } from 'express'
import { EntityManager, getConnectionManager } from 'typeorm'
import { inCartQueries } from '../queries/inCartQueries'

const ctrl = {
  getProductInCart: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const CitizenID = req.params.citizenID
    const product = await manager.query(
      inCartQueries.getProductInCart({ CitizenID })
    )
    res.json(product)
  },

  addToIncart: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const { body } = req
    const product = await manager.query(inCartQueries.addToIncart(body))
    res.json(product)
  },

  deleteInCart: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const ProductID = req.params.productID
    const CitizenID = req.params.citizenID
    const product = await manager.query(
      inCartQueries.deleteInCart({ ProductID, CitizenID })
    )
    res.json(product)
  },

  takeToOrder: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const { CitizenID } = req.body
    const { insertToOrder, updateProductSoldPrice, updateProductOrderID } =
      inCartQueries.takeToOrder()
    const insertResult = await manager.query(insertToOrder({ CitizenID }))
    const OrderID = insertResult.insertId
    await manager.query(updateProductSoldPrice({ CitizenID }))
    await manager.query(updateProductOrderID({ CitizenID, OrderID }))
    res.json({ message: 'Take to order complete' })
  },
}

export default ctrl
