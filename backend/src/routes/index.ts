import { Router } from 'express'

import inCarts from './inCarts'
import orders from './orders'
import products from './products'
import sellers from './sellers'
import wishlists from './wishlists'

const app = Router()

app.use('/inCarts', inCarts)
app.use('/orders', orders)
app.use('/products', products)
app.use('/sellers', sellers)
app.use('/wishlists', wishlists)

export default app
