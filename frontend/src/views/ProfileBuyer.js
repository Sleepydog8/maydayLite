import { useEffect, useState } from 'react'
import * as api from '../lib/api'

var wishlist = [
  {
    ProductId: 3,
    CitizenId: 1,
    Name: 'Tiew Handsome',
    Price: 200000,
  },
  {
    ProductId: 2,
    CitizenId: 1,
    Name: 'LV หลุยส์แท้ 10%',
    Price: 150000,
  },
]

var cart = [
  {
    CitizenId: 1,
    ProductId: 1,
    Price: 20000,
    Name: 'Lady Dior',
  },
  {
    CitizenId: 1,
    ProductId: 2,
    Name: 'LV หลุยส์แท้ 10%',
    Price: 10,
  },
]

function ProfileBuyer() {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [order, setOrder] = useState([])
  useEffect(() => {
    getProductInWishlist()
    getProductInCart()
    getProductInOrder()
  }, [])
  async function getProductInWishlist() {
    try {
      const data = await api.wishlist.get()
      console.log('wishlist: ', data)
      setWishlist(data)
    } catch (error) {
      console.log('get Product In Wishlist Error')
    }
  }
  async function getProductInCart() {
    try {
      const data = await api.cart.get()
      console.log('inCart: ', data)
      setCart(data)
    } catch (error) {
      console.log('get Product In Cart Error')
    }
  }
  async function getProductInOrder() {
    try {
      const data = await api.order.get()
      console.log('Order: ', data)
      setOrder(data)
    } catch (error) {
      console.log('get Product In Order Error')
    }
  }
  async function deleteCart(ProductID) {
    try {
      const data = await api.cart.delete(ProductID)
    } catch (error) {
      console.log('delete Cart Error')
    }
  }
  async function deleteWishlist(ProductID) {
    try {
      const data = await api.wishlist.delete(ProductID)
    } catch (error) {
      console.log('delete Wishlist Error')
    }
  }
  async function takeToOrder() {
    try {
      const data = await api.cart.takeToOrder()
    } catch (error) {
      console.log('take to order Error')
    }
  }
  async function checkout() {
    try {
      const data = await api.order.checkout()
    } catch (error) {
      console.log('check out Error')
    }
  }
  return (
    <div class="container">
      <container>
        <br />
        <div class="d-flex justify-content-between">
          <h1>MayDay</h1>
          <div>
            <button
              onClick={() => (window.location.href = '/search-product')}
              class="btn btn-light"
              style={{ backgroundColor: '#181D31', color: 'white' }}
            >
              Search Product
            </button>
          </div>
        </div>
        <div>
          <h3> Wishlist </h3>
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id="wishlist-productlist">
              {wishlist.map((item) => (
                <tr id={item.ProductId}>
                  <td>{item.ProductId}</td>
                  <td>{item.Name}</td>
                  <td>{item.Price}</td>
                  <td>
                    <button
                      class="btn btn-outline-secondary"
                      onClick={() => deleteWishlist(item.ProductId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br></br>

          <h3>Cart</h3>
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id="cart-productlist">
              {cart.map((item) => (
                <tr id={item.ProductId}>
                  <td>{item.ProductId}</td>
                  <td>{item.Name}</td>
                  <td>{item.Price}</td>
                  <td>
                    <button
                      class="btn btn-outline-secondary"
                      onClick={() => deleteCart(item.ProductId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button class="btn btn-success mt-3 mb-3" onClick={takeToOrder}>
            Take to Order
          </button>
          <br></br>
          <h3>Order</h3>
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody id="order-productlist">
              {order.map((item) => (
                <tr id={item.ProductId}>
                  <td>{item.ProductId}</td>
                  <td>{item.Name}</td>
                  <td>{item.Price}</td>
                  <td>{item.Status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button class="btn btn-success" onClick={checkout}>
            Check out
          </button>
          <br></br>
        </div>
        <br></br>
        <button
          onClick={() => (window.location.href = '/ProfileSeller')}
          class="btn btn-primary mb-5"
        >
          Switch Account
        </button>
      </container>
    </div>
  )
}

export default ProfileBuyer
