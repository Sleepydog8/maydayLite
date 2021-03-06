export const orderQueries = {
  getProductInOrder: ({ CitizenID }) => {
    return `SELECT P.*, O.OrderStatus
    FROM ordert O, product P
    WHERE BuyerID = '${CitizenID}' AND O.orderID = P.orderID`
  },

  checkout: () => {
    const updateOrder = ({ CitizenID }) => {
      return `UPDATE Ordert set OrderStatus = "O" WHERE BuyerID = '${CitizenID}' AND Orderstatus = 'I'`
    }

    const deleteInCart = ({ CitizenID }) => {
      return `DELETE FROM IN_CART I where I.CitizenID = '${CitizenID}'`
    }

    return { updateOrder, deleteInCart }
  },
}
