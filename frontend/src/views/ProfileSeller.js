import { useEffect, useState } from 'react'
import * as api from '../lib/api'

var productList = [
  {
    ProductName: 'LV แม่เจ้า ของจริงนี่ ดูต่าเปล่าดูเหมือนของจริงมาก',
    Category: 'Shirt',
    Brand: 'LV',
    Price: 300000,
  },
  {
    ProductName: 'Deor ของแท้แน่นอน ไม่แท้เอาปากกามาวงค่ะ',
    Category: 'Shoes',
    Brand: 'Deor',
    Price: 120000,
  },
  {
    ProductName: 'ไหนกี้',
    Category: 'Shoes',
    Brand: 'NIke',
    Price: 120000,
  },
]

function ProfileSeller() {
  const [productInStock, setProductInStock] = useState([])
  useEffect(() => {
    getInStock()
  }, [])
  async function getInStock() {
    try {
      const data = await api.product.getInStock()
      setProductInStock(data)
    } catch (error) {
      console.log('get InStock error')
    }
  }
  async function stock() {
    var newProduct = {
      CitizenID: 1234567890121,
      ProductName: document.getElementById('ProductName').value,
      Catagory: document.getElementById('Category').value,
      Brand: document.getElementById('Brand').value,
      Price: document.getElementById('Price').value,
    }
    try {
      const data = await api.product.stock(newProduct)
      console.log(data)
    } catch (error) {
      console.log('stock product error')
    }
  }

  async function deleteProduct(ProductID) {
    try {
      const data = await api.product.delete(ProductID)
    } catch (error) {
      console.log('delete product error')
    }
  }
  return (
    <div>
      <h1> MayDay </h1>
      <h1> Product List </h1>
      <label for="ProductName">Product Name :</label>
      <input type="text" id="ProductName"></input>
      <br />
      <label for="Category">Category :</label>
      <input type="text" id="Category"></input>
      <br />
      <label for="Brand">Brand :</label>
      <input type="text" id="Brand"></input>
      <br />
      <label for="Price">Price :</label>
      <input type="number" id="Price"></input>
      <br />
      <button id="addBtn" onClick={stock}>
        Stock
      </button>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
          {productInStock.map((item) => (
            <tr id={item.ProductName}>
              <td>{item.ProductName}</td>
              <td>{item.Category}</td>
              <td>{item.Brand}</td>
              <td>{item.Price}</td>
              <td>
                <button
                  class="deleteBtn"
                  onClick={() => deleteProduct(item.ProductId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </thead>

        <tbody id="stock-ProductList"></tbody>
      </table>
      <button onClick={() => (window.location.href = '/')}>Back</button>
    </div>
  )
}

export default ProfileSeller
