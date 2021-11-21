import { Router } from 'express'
import ctrl from '../controllers/SellerController'

const routes = Router()

routes.get('/', ctrl.getSellers)

export default routes
