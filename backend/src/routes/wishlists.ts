import { Router } from 'express'
import ctrl from '../controllers/WishlistController'

const routes = Router()

routes.get('/', ctrl.getProductInWishlist)
routes.post('/', ctrl.addToWishlist)
routes.delete('/', ctrl.deleteWishlist)

export default routes
