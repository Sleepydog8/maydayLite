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
      CitizenID: '1234567890121',
      ProductName: document.getElementById('ProductName').value,
      Category: document.getElementById('Category').value,
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
    <div class="container">
      <div class="d-flex flex-column align-items-start">
        <h1> MayDay </h1>
        <br />
      </div>
      <div class="row">
        <div class="col">
          <label for="ProductName" class="form-label">
            Product Name{' '}
          </label>
          <input type="text" id="ProductName" class="form-control ms-2"></input>
        </div>
        <div class="col">
          <label for="Category" class="form-label">
            Category{' '}
          </label>
          <input type="text" id="Category" class="form-control ms-2"></input>
        </div>
        <div class="col">
          <label for="Brand" class="form-label">
            Brand{' '}
          </label>
          <input type="text" id="Brand" class="form-control ms-2"></input>
        </div>
        <div class="col">
          <label for="Price" class="form-label">
            Price{' '}
          </label>
          <input type="number" id="Price" class="form-control ms-2"></input>
        </div>
      </div>
      <br />
      <button class="btn btn-success" onClick={stock}>
        Stock
      </button>
      <br />
      <table class="table">
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
                  class="btn btn-outline-secondary"
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
      <button
        onClick={() => (window.location.href = '/')}
        class="btn btn-primary mb-5"
      >
        Switch Account
      </button>
    </div>
  )
}

export default ProfileSeller
