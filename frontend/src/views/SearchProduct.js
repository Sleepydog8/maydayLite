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
        Content:
          'https://static.posttoday.com/media/content/2019/03/24/5F8D97E75C634E77BB43172A06F84282.jpg',
      },
      {
        AdsID: 12313,
        Price: 999,
        Content:
          'https://sgp1.digitaloceanspaces.com/adaybulletin/2020/08/WEB-Whene-I-Was-Young-Doraemon.jpg',
      },
    ],
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
      const data = adBuyers
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
              <tr id={item.name}>
                <td>{item.Price}</td>
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
