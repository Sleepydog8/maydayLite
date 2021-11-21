import { useEffect } from 'react'
import heart from './image/heart.png'
import shopping_cart from './image/shopping-cart.png'
var p = [
  {
    ProductId: 1,
    Name: 'Lady Dior',
    Price: 20000,
    Catagory: 'Shirt',
  },
  {
    ProductId: 2,
    Name: 'LV หลุยส์แท้ 10%',
    Price: 150000,
    Category: 'Shirt',
  },
  {
    ProductId: 3,
    Name: 'Tiew Handsome',
    Price: 200000,
    Category: 'Shoes',
  },
]

function search(catagory) {
  alert(catagory)
}

function addToWishlist(productId) {
  alert(productId)
  console.log('ssss')
}
function addToInCart(productId) {
  alert(productId)
  console.log('ssss')
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
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

function SearchProduct() {
  useEffect(() => {}, [])
  return (
    <div>
      <h1
        style={{
          justifyContent: 'left',
          display: 'flex',
          marginLeft: '100px',
          fontSize: '50px',
        }}
      >
        MayDay
      </h1>
      <div
        style={{
          justifyContent: 'left',
          flexDirection: 'column',
        }}
      >
        <h2>Product</h2>
        <label for="Catagory" style={{ marginRight: '7px' }}>
          Catagory
        </label>
        <select
          name="Catagory"
          id="Catagory"
          onChange={(e) => search(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Shirt">Shirt</option>
          <option value="Shoes">Shoes</option>
        </select>
      </div>
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
          // flexDirection: 'column',
          // width: '800px',
          marginTop: '20px',
        }}
      >
        <table style={{ width: '1000px' }}>
          <thead>
            <tr
              style={{
                backgroundColor: 'rgb(150,150,150)',
                color: 'white',
                height: '30px',
              }}
            >
              <th>Product Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Wishlist</th>
              <th>Cart</th>
            </tr>
            {p.map((item) => (
              <tr id={item.ProductId}>
                <td>{item.ProductId}</td>
                <td>{item.Name}</td>
                <td>{item.Price}</td>
                <td>
                  <button
                    style={{ border: 'None', backgroundColor: 'transparent' }}
                    onClick={() => addToWishlist(item.ProductId)}
                  >
                    <img src={heart} width="25px" height="25px" />
                  </button>
                </td>
                <td>
                  <button
                    style={{ border: 'None', backgroundColor: 'transparent' }}
                    onClick={() => addToInCart(item.ProductId)}
                  >
                    <img src={shopping_cart} width="25px" height="25px" />
                  </button>
                </td>
              </tr>
            ))}
          </thead>
          <tbody id="search-productlist"></tbody>
        </table>
      </div>
      <button
        style={{
          marginTop: '20px',
          width: '100px',
          height: '25px',
        }}
        onClick={() => (window.location.href = '/')}
      >
        Back
      </button>
    </div>
  )
}

export default SearchProduct
