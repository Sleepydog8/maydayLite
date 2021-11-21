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

function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show')
}

function addToWishlist(productId) {
  alert('add to wishlist complete!')
  console.log('ssss')
}
function ssinCart() {
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
// Close the dropdown if the user clicks outside of it

window.onClick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content')
    var i
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}

function ProfileBuyer() {
  useEffect(() => {
    showItemsInWishlist()
    showItemsInCart()
    showItemsInOrder()
  }, [])

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
          <table class="myTable" style={{ border: '1px solid #f00' }}>
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
