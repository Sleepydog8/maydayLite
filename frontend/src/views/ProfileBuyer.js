import { useEffect, useState } from 'react'

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
var order = []

function addToWishlist(productId) {
  alert('add to wishlist complete!')
  console.log('ssss')
}
function inCart() {
  alert('in cart complete!')
  console.log('ssss')
}

function deleteWishlist(productId) {
  alert(productId)
}
function deleteCart(productId) {
  console.log(`deleteProduct${productId}'`)
  alert(productId)
}

function takeToOrder() {
  //take product from cart to order
  alert('order complete!')
}

function checkout() {
  alert('checkout!!!')
}

async function showItemsInWishlist() {}
async function showItemsInCart() {}

async function showItemsInOrder() {}

function ProfileBuyer() {
  useEffect(() => {
    showItemsInWishlist()
    showItemsInCart()
    showItemsInOrder()
  }, [])

  return (
    <div class="container">
      <container>
        <br />
        <div class="d-flex justify-content-between">
          <h1>MayDay</h1>
          <div>
            <button
              onClick={() => (window.location.href = '/Ad')}
              class="btn btn-light me-2"
              style={{ backgroundColor: '#E6DDC4', color: 'black' }}
            >
              AdsBuyer
            </button>
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
