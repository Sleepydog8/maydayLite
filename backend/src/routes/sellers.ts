import { Router } from 'express'
import ctrl from '../controllers/SellerController'

const sellerRouter = Router()

sellerRouter.get('/', ctrl.getSellers)

export default sellerRouter
