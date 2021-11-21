import { Router } from 'express'
import ctrl from '../controllers/InCartController'

const routes = Router()

routes.get('/', ctrl.getProductInCart)
routes.post('/', ctrl.addToIncart)
routes.delete('/', ctrl.deleteInCart)
routes.patch('/', ctrl.takeToOrder)

export default routes
