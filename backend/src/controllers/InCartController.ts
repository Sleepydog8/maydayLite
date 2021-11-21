import { Request, Response } from 'express'
import { EntityManager, getConnectionManager } from 'typeorm'
import { inCartQueries } from '../queries/inCartQueries'

const ctrl = {
  getProductInCart: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const { body } = req
    const product = await manager.query(inCartQueries.getProductInCart(body))
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
    const { body } = req
    const product = await manager.query(inCartQueries.deleteInCart(body))
    res.json(product)
  },

  takeToOrder: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const { body } = req
    const product = await manager.query(inCartQueries.takeToOrder(body))
    res.json(product)
  },
}

export default ctrl
