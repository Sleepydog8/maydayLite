import { useEffect, useState } from 'react'
import * as api from '../lib/api'
import heart from './image/heart.png'
import shopping_cart from './image/shopping-cart.png'

var adBuyers = [
  {
    Name: 'Pun',
    Email: 'suppanat@acd.com',
    PhoneNo: '023284',
    Ads: [
      {
        AdsID: 12312,
        Price: 999,
        Content: 'https://i.ytimg.com/vi/ccd2NCA17Pw/maxresdefault.jpg',
      },
      {
        AdsID: 12313,
        Price: 999,
        Content:
          'https://www.smeleader.com/wp-content/uploads/2020/07/%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%AA%E0%B9%82%E0%B8%A5%E0%B9%81%E0%B8%81%E0%B8%99%E0%B8%AE%E0%B8%B2%E0%B9%86-%E0%B8%AA%E0%B9%82%E0%B8%A5%E0%B9%81%E0%B8%81%E0%B8%99%E0%B8%81%E0%B8%A7%E0%B8%99%E0%B9%86-%E0%B8%95%E0%B8%A5%E0%B8%81%E0%B9%86-9-1.jpg',
      },
    ],
  },
]
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
function SearchProduct() {
  const [products, setProducts] = useState([])
  const [adsList, setAds] = useState([])
  useEffect(() => {
    getAds()
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
  function getAds() {
    try {
      const data = adBuyers[0].Ads
      setAds(data)
    } catch (error) {
      console.log('get ads error')
    }
  }
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
          defaultValue="ALL"
          onChange={(e) => search(e.target.value)}
        >
          <option value="ALL">All</option>
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
            {products.map((item) => (
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
              <th>Sponsor by</th>
            </tr>
          </thead>
          <tbody id="adlist">
            {adsList.map((item) => (
              <tr id={item.AdsID}>
                <td>
                  <img src={item.Content} height="300px"></img>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={() => (window.location.href = '/')}
        class="btn btn-primary mt-5"
      >
        Back
      </button>
    </div>
  )
}

export default SearchProduct
