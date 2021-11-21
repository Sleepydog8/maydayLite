export const orderQueries = {
  getProductInOrder: ({ CitizenID }) => {
    return `SELECT P.*
    FROM ordert O, product P
    WHERE BuyerID = '${CitizenID}' AND O.orderID = P.orderID`
  },

  checkout: ({ CitizenID }) => {
    return `UPDATE Ordert set OrderStatus = "P" WHERE BuyerID = citizenID AND OrderID = "1";
    DELETE FROM IN_CART I where I.CitizenID = '${CitizenID}'`
  },
}
