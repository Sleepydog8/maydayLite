import { Router } from 'express'
import ctrl from '../controllers/InCartController'

const routes = Router()

routes.get('/:citizenID', ctrl.getProductInCart)
routes.post('/', ctrl.addToIncart)
routes.delete('/:productID/:citizenID', ctrl.deleteInCart)
routes.patch('/', ctrl.takeToOrder)

export default routes
