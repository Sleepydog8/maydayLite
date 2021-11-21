import { Router } from 'express'
import ctrl from '../controllers/ProductController'

const routes = Router()

routes.get('/', ctrl.getProduct)
routes.post('/', ctrl.stockProduct)

export default routes
