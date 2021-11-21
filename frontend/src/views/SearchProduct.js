import { useEffect } from 'react'

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

async function showItemsInProductList() {
  var table_body = document.getElementById('search-productlist')
  console.log('table_body')
  table_body.innerHTML = ''
  var items = p
  items.map((item) => {
    table_body.innerHTML += `
            <tr id="${item.ProductId}">
                <td>${item.ProductId}</td>
                <td>${item.Name}</td>
                <td>${item.Price}</td>
                <td><button onclick="addToWishlist('${item.ProductId}')"><img src="image/heart.png" width="20" height="20" ></button></td>
                <td><button onclick="alert('${item.ProductId}')"><img src="image/shopping-cart.png" width="20" height="20"></button></td>
            </tr>
            `
  })
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
  useEffect(() => {
    showItemsInProductList()
  }, [])
  return (
    <div>
      <h1>MayDay</h1>
      <h2>Product</h2>
      <div>
        <label for="Catagory">Catagory</label>
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
      <table>
        <thead>
          <tr>
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
                <button onClick={() => addToWishlist(item.ProductId)}>
                  <img src="image/heart.png" width="20" height="20" />
                </button>
              </td>
              <td>
                <button onClick={() => addToInCart(item.ProductId)}>
                  <img src="image/shopping-cart.png" width="20" height="20" />
                </button>
              </td>
            </tr>
          ))}
        </thead>
        <tbody id="search-productlist"></tbody>
      </table>
      <button onClick={() => (window.location.href = '/')}>Back</button>
    </div>
  )
}

export default SearchProduct
