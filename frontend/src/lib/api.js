import axios from 'axios'

//Product
export const product = {
  get: (catagory) =>
    axios
      .get(`http://localhost:3001/products/category/${catagory}`)
      .then(({ data }) => data),
  stock: (newProduct) =>
    axios
      .post(`http://localhost:3001/products`, { newProduct })
      .then(({ data }) => data),
  getInStock: axios
    .get(`http://localhost:3001/products/stock/1234567890121`)
    .then(({ data }) => data),
  delete: (ProductID) =>
    axios
      .delete(`http://localhost:3001/products/`, {
        ProductID,
        CitizenID: 1234567890121,
      })
      .then(({ data }) => data),
}

//In Cart
export const cart = {
  get: axios
    .get(`http://localhost:3001/inCarts/1234567890124`)
    .then(({ data }) => data),
  add: (ProductID) =>
    axios
      .post(`http://localhost:3001/inCarts`, {
        ProductID,
        CitizenID: 1234567890124,
      })
      .then(({ data }) => data),
  delete: (ProductID) =>
    axios
      .delete(`http://localhost:3001/inCarts`, {
        ProductID,
        CitizenID: 1234567890124,
      })
      .then(({ data }) => data),
  takeToOrder: axios
    .patch(`http://localhost:3001/inCarts`, { CitizenID: 1234567890124 })
    .then(({ data }) => data),
}

//Order
export const order = {
  get: axios
    .get(`http://localhost:3001/orders`, { CitizenID: 1234567890124 })
    .then(({ data }) => data),
  checkout: axios
    .put(`http://localhost:3001/orders`, { CitizenID: 1234567890124 })
    .then(({ data }) => data),
}

//Wishlist
export const wishlist = {
  get: axios
    .get(`http://localhost:3001/wishlists/1234567890124`)
    .then(({ data }) => data),
  add: (ProductID) =>
    axios
      .post(`http://localhost:3001/wishlists`, {
        ProductID,
        CitizenID: 1234567890124,
      })
      .then(({ data }) => data),
  delete: (ProductID) =>
    axios
      .delete(`http://localhost:3001/wishlists`, {
        ProductID,
        CitizenID: 1234567890124,
      })
      .then(({ data }) => data),
}
/*
routes.get('/category/:category', ctrl.getProduct)
routes.get('/stock/:citizenID', ctrl.getProductInStock)

routes.get('/', ctrl.getProductInWishlist)
routes.post('/', ctrl.addToWishlist)
routes.delete('/', ctrl.deleteWishlist)

routes.put('/', ctrl.checkout)
routes.get('/', ctrl.getProductInCart)
routes.post('/', ctrl.addToIncart)
routes.delete('/', ctrl.deleteInCart)
routes.patch('/', ctrl.takeToOrder)

routes.get('/', ctrl.getProduct)
routes.post('/', ctrl.stockProduct)
getProduct(catagory) // -,shirt,shoes
getProductInWishlist(citizenId)
getProductInCart(citizenId)
getProductInOrder(citizenId)
getProductInStock(citizenId)
addToWishlist(citizenId, ProductID)
inCart(citizenId, ProductID)
deleteWishlist(citizenId, ProductID)
deleteInCart(citizenId, ProductID)
takeToOrder(citizenId, getProductInCart())
checkout(citizenId, getProductInOrder())
deleteProduct(citizenId, ProductID)
stockProduct(Object(citizenId, Brand, Name, Category, Price))*/
