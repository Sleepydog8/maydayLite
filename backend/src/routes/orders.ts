import { Router } from 'express'
import ctrl from '../controllers/OrderController'

const routes = Router()

routes.put('/', ctrl.checkout)

export default routes
