import { useEffect, useState } from 'react'
import * as api from '../lib/api'

function SearchProduct() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    search('ALL')
  }, [])

  async function search(catagory) {
    try {
      const data = await api.product.get(catagory)
      setProducts(data)
      console.log(data)
    } catch (error) {
      console.log('Search Error')
    }
  }

  async function addToWishlist(ProductID) {
    try {
      const data = await api.wishlist.add(ProductID)
    } catch (error) {
      console.log('add to wishlist Error')
    }
  }
  async function addToInCart(ProductID) {
    try {
      const data = await api.cart.add(ProductID)
    } catch (error) {
      console.log('add to cart Error')
    }
  }

  return (
    <div>
      <h1>MayDay</h1>
      <h2>Product</h2>
      <div>
        <label for="Catagory">Catagory</label>
        <select
          name="Catagory"
          id="Catagory"
          defaultValue="ALL"
          onChange={(e) => search(e.target.value)}
        >
          <option value="ALL">All</option>
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
          {products.map((item) => (
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
