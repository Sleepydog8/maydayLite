import { Router } from 'express'

import inCarts from './inCarts'
import orders from './orders'
import products from './products'
import wishlists from './wishlists'

const app = Router()

app.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  ) // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  //res.setHeader('Access-Control-Allow-Credentials', true)
})

app.use('/inCarts', inCarts)
app.use('/orders', orders)
app.use('/products', products)
app.use('/wishlists', wishlists)

export default app
