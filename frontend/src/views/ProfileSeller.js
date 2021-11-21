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

async function showItemsInStock() {
  var table_body = document.getElementById('stock-ProductList')
  console.log('showItemsInStock')
  table_body.innerHTML = ''
  var items = productList
  items.map((item) => {
    table_body.innerHTML += `
            <tr id="${item.ProductName}">
                <td>${item.ProductName}</td>
                <td>${item.Category}</td>
                <td>${item.Brand}</td>
                <td>${item.Price}</td>
                <td><button class='deleteBtn' onClick="deleteCart('${item.ProductId}')">Delete</button></td>
            </tr>
            `
  })
}

function ProfileSeller() {
  useEffect(() => {
    showItemsInStock()
  }, [])
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
        </thead>

        <tbody id="stock-ProductList"></tbody>
      </table>
      <button onClick={() => (window.location.href = '/')}>Back</button>
    </div>
  )
}

export default ProfileSeller
