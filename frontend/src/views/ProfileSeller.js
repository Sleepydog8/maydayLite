import { useEffect } from 'react'

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

function stock() {
  console.log(document.getElementById('ProductName').value)
  console.log(document.getElementById('Category').value)
  console.log(document.getElementById('Brand').value)
  console.log(document.getElementById('Price').value)
}

function deleteProduct(productId) {
  console.log(productId)
}

async function showItemsInStock() {}

function ProfileSeller() {
  useEffect(() => {
    showItemsInStock()
  }, [])
  return (
    <div class="container">
      <div class="d-flex flex-column align-items-start">
        <h1> MayDay </h1>
      </div>
      <div class="row">
        <div class="col">
          <label for="ProductName">Product Name </label>
          <input type="text" id="ProductName" class="ms-2"></input>
        </div>
        <div class="col">
          <label for="Category">Category </label>
          <input type="text" id="Category" class="ms-2"></input>
        </div>
        <div class="col">
          <label for="Brand">Brand </label>
          <input type="text" id="Brand" class="ms-2"></input>
        </div>
        <div class="col">
          <label for="Price">Price </label>
          <input type="number" id="Price" class="ms-2"></input>
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
          {productList.map((item) => (
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
