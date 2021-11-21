export const orderQueries = {
  checkout: ({ CitizenID }) => {
    return `UPDATE Ordert set OrderStatus = "P" WHERE BuyerID = '${CitizenID}' AND Orderstatus = 'I'
    DELETE FROM IN_CART I where I.CitizenID = '${CitizenID}'`
  },
}
