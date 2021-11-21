export const orderQueries = {
  checkout: ({ CitizenID }) => {
    return `UPDATE Ordert set OrderStatus = "P" WHERE BuyerID = citizenID AND OrderID = "1";
    DELETE FROM IN_CART I where I.CitizenID = '${CitizenID}'`
  },
}
