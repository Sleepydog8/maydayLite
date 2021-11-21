export const wishlistQueries = {
  getProductInWishlist: ({ CitizenID }) => {
    return `SELECT P.* FROM product P,add_to_wishlist A WHERE P.productID = A.productID AND A.citizenID = '${CitizenID}'`
  },

  addToWishlist: ({ CitizenID, ProductID }) => {
    return `INSERT INTO add_to_wishlist (AddToWishListDatetime, CitizenID, ProductID) VALUES (NOW(), '${CitizenID}', '${ProductID}')`
  },

  deleteWishlist: ({ ProductID, CitizenID }) => {
    return `delete from add_to_wishlist A where A.productid = '${ProductID}' and A.citizenid = '${CitizenID}'`
  },
}
