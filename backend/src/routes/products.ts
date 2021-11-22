import { Router } from 'express'
import ctrl from '../controllers/ProductController'

const routes = Router()

routes.get('/category/:category', ctrl.getProduct)
routes.get('/stock/:citizenID', ctrl.getProductInStock)
routes.delete('/:productID/', ctrl.deleteProduct)
routes.post('/', ctrl.stockProduct)

export default routes
