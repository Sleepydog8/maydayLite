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
    <div>
      <container>
        <div>
          <h1>MayDay</h1>
          Search
          <button onClick={() => (window.location.href = '/search-product')}>
            Product
          </button>
        </div>
        <div>
          <h3> Wishlist </h3>
          <table class="myTable">
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
              {wishlist.map((item) => (
                <tr id={item.ProductId}>
                  <td>{item.ProductId}</td>
                  <td>{item.Name}</td>
                  <td>{item.Price}</td>
                  <td>
                    <button
                      class="deleteBtn"
                      onClick={() => deleteWishlist(item.ProductId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </thead>
            <tbody id="wishlist-productlist"></tbody>
          </table>
          <br></br>

          <h3>Cart</h3>
          <table class="myTable">
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
              {cart.map((item) => (
                <tr id={item.ProductId}>
                  <td>{item.ProductId}</td>
                  <td>{item.Name}</td>
                  <td>{item.Price}</td>
                  <td>
                    <button
                      class="deleteBtn"
                      onClick={() => deleteCart(item.ProductId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </thead>
            <tbody id="cart-productlist"></tbody>
          </table>
          <button class="confirmBtn" onClick={takeToOrder}>
            Take to Order
          </button>
          <br></br>
          <hr></hr>
          <h3>Order</h3>
          <table class="myTable">
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
              {order.map((item) => (
                <tr id={item.ProductId}>
                  <td>{item.ProductId}</td>
                  <td>{item.Name}</td>
                  <td>{item.Price}</td>
                  <td>{item.Status}</td>
                </tr>
              ))}
            </thead>
            <tbody id="order-productlist"></tbody>
          </table>
          <button class="confirmBtn" onClick={checkout}>
            Check out
          </button>
          <br></br>
        </div>
        <br></br>
        <div class="dropdown">
          <button onClick="myFunction()" class="dropbtn">
            Switch Account
          </button>
          <div id="myDropdown" class="dropdown-content">
            <a onClick={() => (window.location.href = '/')}>Buyer</a>
            <a onClick={() => (window.location.href = '/ProfileSeller')}>
              Seller
            </a>
          </div>
        </div>
      </container>
    </div>
  )
}

export default ProfileBuyer
