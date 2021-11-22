export const orderQueries = {
  getProductInOrder: ({ CitizenID }) => {
    return `SELECT P.*
    FROM ordert O, product P
    WHERE BuyerID = '${CitizenID}' AND O.orderID = P.orderID`
  },

  checkout: () => {
    const updateOrder = ({ CitizenID }) => {
      return `UPDATE Ordert set OrderStatus = "P" WHERE BuyerID = '${CitizenID}' AND Orderstatus = 'I'`
    }

    const deleteInCart = ({ CitizenID }) => {
      return `DELETE FROM IN_CART I where I.CitizenID = '${CitizenID}'`
    }

    return { updateOrder, deleteInCart }
  },
}
