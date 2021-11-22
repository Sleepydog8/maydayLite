import { Router } from 'express'

import inCarts from './inCarts'
import orders from './orders'
import products from './products'
import wishlists from './wishlists'
import mongo from './../mongo/mongo'

const app = Router()

app.use('/inCarts', inCarts)
app.use('/orders', orders)
app.use('/products', products)
app.use('/wishlists', wishlists)

app.use('/mongo', mongo)

export default app
