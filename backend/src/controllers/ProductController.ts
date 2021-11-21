import { Request, Response } from 'express'
import { EntityManager, getConnectionManager } from 'typeorm'
import { productQueries } from '../queries/productQueries'

const ctrl = {
  getProduct: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const { body } = req
    const product = await manager.query(productQueries.getProducts(body))
    res.json(product)
  },

  getProductInCart: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const { body } = req
    const product = await manager.query(productQueries.getProducts(body))
    res.json(product)
  },

  getProductInOrder: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const { body } = req
    const product = await manager.query(productQueries.getProducts(body))
    res.json(product)
  },

  getProductInStock: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const { body } = req
    const product = await manager.query(productQueries.getProducts(body))
    res.json(product)
  },

  inCart: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const { body } = req
    const product = await manager.query(productQueries.getProducts(body))
    res.json(product)
  },

  deleteInCart: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const { body } = req
    const product = await manager.query(productQueries.getProducts(body))
    res.json(product)
  },

  takeToOrder: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const { body } = req
    const product = await manager.query(productQueries.getProducts(body))
    res.json(product)
  },

  checkout: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const { body } = req
    const product = await manager.query(productQueries.getProducts(body))
    res.json(product)
  },

  deleteProduct: async (req: Request, res: Response) => {
    const connection = getConnectionManager().get('default')
    const manager = new EntityManager(connection)
    const { body } = req
    const product = await manager.query(productQueries.getProducts(body))
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
