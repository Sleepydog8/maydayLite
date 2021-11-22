import { useEffect, useState } from 'react'

var adBuyers = [
  {
    Name: 'Pun',
    Email: 'suppanat@acd.com',
    PhoneNo: '023284',
    Ads: {
      AdsID: 12312,
      Price: 999,
      Content: 'teajoifjodif',
      StartDate: '01.01.2021',
    },
  },
]

function deleteAds(AdsId) {
  alert(AdsId)
}

function Ad() {
  /*useEffect(() => {
    showItemsInWishlist()
    showItemsInCart()
    showItemsInOrder()
  }, [])
  */
  return (
    <div class="container">
      <container>
        <br />
        <div class="d-flex justify-content-between">
          <h1>MayDay</h1>
        </div>
        <div>
          <h3> Ads </h3>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>AdsId</th>
                <th>Price</th>
                <th>Content</th>
                <th>StartDate</th>
              </tr>
            </thead>
            <tbody id="adlist">
              {adBuyers.map((item) => (
                <tr id={item.AdsId}>
                  <td>{item.Price}</td>
                  <td>{item.Content}</td>
                  <td>{item.StartDate}</td>
                  <td>
                    <button
                      class="btn btn-outline-secondary"
                      onClick={() => deleteAds(item.AdsId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br></br>
        </div>
        <br></br>
        <button
          onClick={() => (window.location.href = '/')}
          class="btn btn-primary mb-5"
        >
          Back
        </button>
      </container>
    </div>
  )
}

export default Ad
